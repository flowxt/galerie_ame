import { NextResponse } from "next/server";

// Webhook Stripe simplifié - prêt pour une future intégration
export async function POST(request) {
  try {
    console.log("🔧 Webhook Stripe reçu (fonctionnalité à venir)");
    
    // Pour le moment, on retourne simplement une réponse de succès
    // Ce webhook sera activé quand la boutique sera en ligne
    return NextResponse.json({ 
      received: true, 
      message: "Webhook en attente d'implémentation" 
    });
  } catch (error) {
    console.error("❌ Erreur webhook:", error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
