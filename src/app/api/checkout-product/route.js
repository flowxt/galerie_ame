import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { productId, customerEmail } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID manquant" },
        { status: 400 }
      );
    }

    // Récupérer le produit et son prix
    const product = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    });

    if (!product.default_price) {
      return NextResponse.json(
        { error: "Aucun prix configuré pour ce produit" },
        { status: 400 }
      );
    }

    const priceId = typeof product.default_price === 'string' 
      ? product.default_price 
      : product.default_price.id;

    // Créer une session de paiement Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/boutique`,
      customer_email: customerEmail || undefined,
      shipping_address_collection: {
        allowed_countries: ["FR", "BE", "CH", "LU", "MC", "CA", "US"],
      },
      metadata: {
        productId: productId,
        type: "boutique",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erreur Stripe:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du paiement" },
      { status: 500 }
    );
  }
}

