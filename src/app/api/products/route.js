import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// IDs des produits à exclure (Portrait d'Âme et Tableau de Vie)
const EXCLUDED_PRODUCT_IDS = [
  process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PORTRAIT_INTIME,
  process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PORTRAIT_ELEGANT,
  process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PORTRAIT_DUO,
  process.env.NEXT_PUBLIC_STRIPE_PRODUCT_TABLEAU_INTIME,
  process.env.NEXT_PUBLIC_STRIPE_PRODUCT_TABLEAU_ELEGANT,
  process.env.NEXT_PUBLIC_STRIPE_PRODUCT_TABLEAU_PREMIUM,
];

export async function GET() {
  try {
    // Récupérer tous les produits actifs depuis Stripe
    const products = await stripe.products.list({
      active: true,
      expand: ["data.default_price"],
      limit: 100,
    });

    // Filtrer pour exclure les produits Portrait d'Âme et Tableau de Vie
    const shopProducts = products.data.filter(
      (product) => !EXCLUDED_PRODUCT_IDS.includes(product.id)
    );

    // Formater les produits pour l'affichage
    const formattedProducts = shopProducts.map((product) => {
      const price = product.default_price;
      
      return {
        id: product.id,
        name: product.name,
        description: product.description || "",
        images: product.images || [],
        price: price ? {
          amount: price.unit_amount,
          currency: price.currency,
          formatted: new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: price.currency.toUpperCase(),
          }).format(price.unit_amount / 100),
        } : null,
        metadata: product.metadata || {},
      };
    });

    return NextResponse.json({
      success: true,
      products: formattedProducts,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Impossible de récupérer les produits",
      },
      { status: 500 }
    );
  }
}

