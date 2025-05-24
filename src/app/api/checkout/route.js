import { NextResponse } from "next/server";
import Stripe from "stripe";

// Configuration Stripe avec gestion des clés fictives
const stripe = process.env.STRIPE_SECRET_KEY?.startsWith("sk_test_XXXXXX")
  ? null // Clé fictive - on simule
  : new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    });

export async function POST(request) {
  try {
    const { artwork } = await request.json();

    // Validation des données
    if (!artwork || !artwork.title || !artwork.price) {
      return NextResponse.json(
        { error: "Données d'œuvre manquantes" },
        { status: 400 }
      );
    }

    // Si on utilise des clés fictives, on simule une réponse
    if (!stripe) {
      // Simulation pour le développement
      console.log("🎨 Simulation Stripe Checkout pour:", artwork.title);
      return NextResponse.json({
        url: "/checkout/success?session_id=cs_test_simulation_" + Date.now(),
        isSimulation: true,
      });
    }

    // Créer la session Stripe Checkout (code réel)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: artwork.title,
              description: artwork.description,
              images: artwork.image ? [artwork.image] : [],
            },
            unit_amount: Math.round(artwork.price * 100), // Convertir en centimes
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${
        process.env.NEXTAUTH_URL || "http://localhost:3000"
      }/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${
        process.env.NEXTAUTH_URL || "http://localhost:3000"
      }/boutique`,
      metadata: {
        artworkId: artwork._id || artwork.id,
        artworkTitle: artwork.title,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erreur Stripe:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement" },
      { status: 500 }
    );
  }
}
