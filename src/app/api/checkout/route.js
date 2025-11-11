import { NextResponse } from "next/server";
import Stripe from "stripe";

// Configuration Stripe
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })
  : null;

export async function POST(request) {
  try {
    const { productId, customerData, successUrl, cancelUrl } = await request.json();

    // Validation des données
    if (!productId) {
      return NextResponse.json(
        { error: "ID de produit manquant" },
        { status: 400 }
      );
    }

    // Vérifier que Stripe est configuré
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe n'est pas configuré. Vérifiez vos variables d'environnement." },
        { status: 500 }
      );
    }

    // Récupérer les prix associés au produit
    const prices = await stripe.prices.list({
      product: productId,
      active: true,
      limit: 1,
    });

    if (prices.data.length === 0) {
      return NextResponse.json(
        { error: "Aucun prix trouvé pour ce produit" },
        { status: 400 }
      );
    }

    const priceId = prices.data[0].id;

    // Préparer les métadonnées client
    const metadata = {
      orderType: customerData?.orderType || "portrait",
      customerName: `${customerData?.firstName || ""} ${customerData?.lastName || ""}`.trim(),
      customerEmail: customerData?.email || "",
      customerPhone: customerData?.phone || "",
    };

    // Si c'est un portrait d'âme, ajouter les données spécifiques
    if (customerData?.birthDate) {
      metadata.birthDate = customerData.birthDate;
      metadata.birthPlace = customerData.birthPlace || "";
      metadata.maidenName = customerData.maidenName || "";
    }

    // Préparer l'adresse de livraison
    const shippingOptions = customerData?.address
      ? [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: {
                amount: 0, // Livraison offerte
                currency: "eur",
              },
              display_name: "Livraison offerte",
              delivery_estimate: {
                minimum: {
                  unit: "business_day",
                  value: 14,
                },
                maximum: {
                  unit: "business_day",
                  value: 21,
                },
              },
            },
          },
        ]
      : [];

    // Créer la session Stripe Checkout
    const sessionConfig = {
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl || `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/portrait-d-ame#tarifs`,
      metadata: metadata,
      locale: "fr",
      billing_address_collection: "auto",
    };

    // Ajouter l'adresse de livraison si disponible
    if (customerData?.address) {
      sessionConfig.shipping_address_collection = {
        allowed_countries: ["FR", "BE", "CH", "LU", "MC"],
      };
      sessionConfig.shipping_options = shippingOptions;
    }

    // Pré-remplir l'email du client si disponible
    if (customerData?.email) {
      sessionConfig.customer_email = customerData.email;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ 
      url: session.url,
      sessionId: session.id 
    });
  } catch (error) {
    console.error("Erreur Stripe:", error);
    return NextResponse.json(
      { 
        error: "Erreur lors de la création de la session de paiement",
        details: error.message 
      },
      { status: 500 }
    );
  }
}
