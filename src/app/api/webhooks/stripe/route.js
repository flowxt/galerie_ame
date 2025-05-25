import { NextResponse } from "next/server";
import { updateArtworkStatus } from "../../../../lib/sanity-queries";
import Stripe from "stripe";

const stripe = process.env.STRIPE_SECRET_KEY?.startsWith("sk_test_XXXXXX")
  ? null // Clé fictive - webhook désactivé
  : new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    });

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  try {
    // Si on utilise des clés fictives, on ignore le webhook
    if (!stripe || !endpointSecret) {
      console.log("🔧 Webhook Stripe désactivé (mode développement)");
      return NextResponse.json({ received: true, simulation: true });
    }

    const body = await request.text();
    const sig = request.headers.get("stripe-signature");

    let event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
      console.error(`❌ Erreur de signature webhook: ${err.message}`);
      return NextResponse.json(
        { error: "Signature invalide" },
        { status: 400 }
      );
    }

    // Gérer les événements
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;

        if (session.metadata?.artworkId) {
          console.log("🎨 Paiement réussi, mise à jour de l'œuvre...");

          try {
            await updateArtworkStatus(
              session.metadata.artworkId,
              "sold",
              new Date().toISOString()
            );

            console.log(
              `✅ Œuvre ${session.metadata.artworkId} marquée comme vendue`
            );
          } catch (error) {
            console.error("❌ Erreur lors de la mise à jour:", error);
          }
        }
        break;

      case "checkout.session.async_payment_succeeded":
        // Gérer les paiements asynchrones réussis
        const asyncSession = event.data.object;
        console.log("🔄 Paiement asynchrone réussi:", asyncSession.id);
        break;

      case "checkout.session.async_payment_failed":
        // Gérer les échecs de paiements asynchrones
        const failedSession = event.data.object;
        console.log("❌ Paiement asynchrone échoué:", failedSession.id);

        // Remettre l'œuvre disponible si nécessaire
        if (failedSession.metadata?.artworkId) {
          try {
            await updateArtworkStatus(
              failedSession.metadata.artworkId,
              "available"
            );
            console.log(
              `🔄 Œuvre ${failedSession.metadata.artworkId} remise en vente`
            );
          } catch (error) {
            console.error("❌ Erreur lors de la remise en vente:", error);
          }
        }
        break;

      default:
        console.log(`🔍 Événement webhook non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("❌ Erreur webhook:", error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
