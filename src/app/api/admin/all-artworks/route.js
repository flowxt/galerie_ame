import { NextResponse } from "next/server";
import { client } from "../../../../lib/sanity";

export async function GET() {
  try {
    // Récupérer TOUTES les œuvres peu importe le statut
    const artworks = await client.fetch(`
      *[_type == "artwork"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        category,
        status,
        price,
        technique,
        createdDate,
        soldDate,
        featured
      }
    `);

    return NextResponse.json({
      success: true,
      artworks: artworks || [],
      count: artworks?.length || 0,
    });
  } catch (error) {
    console.error("Erreur lors du chargement des œuvres:", error);
    return NextResponse.json(
      {
        error: "Erreur lors du chargement des œuvres",
        artworks: [],
      },
      { status: 500 }
    );
  }
}
