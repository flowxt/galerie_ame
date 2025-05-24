import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "87p604qr",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03",
  token: process.env.SANITY_API_TOKEN, // Clé API pour les mutations
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
