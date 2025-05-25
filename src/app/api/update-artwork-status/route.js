import { NextResponse } from "next/server";
import { updateArtworkStatus } from "../../../lib/sanity-queries";

export async function POST(request) {
  try {
    const { artworkId, status, soldDate } = await request.json();

    // Validation des paramètres
    if (!artworkId || !status) {
      return NextResponse.json(
        { error: "ID de l'œuvre et statut requis" },
        { status: 400 }
      );
    }

    // Validation du statut
    const validStatuses = ["available", "reserved", "sold"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
    }

    // Si le statut est "vendu", ajouter la date de vente
    const updateDate =
      status === "sold" ? soldDate || new Date().toISOString() : null;

    // Mettre à jour dans Sanity
    const result = await updateArtworkStatus(artworkId, status, updateDate);

    return NextResponse.json({
      success: true,
      message: `Statut mis à jour: ${status}`,
      result: result,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du statut:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}
