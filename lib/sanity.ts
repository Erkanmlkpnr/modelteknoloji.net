import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// SanityImageSource is the accepted input type for imageUrlBuilder.image()
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : (null as any);

const builder = projectId ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) throw new Error("Sanity not configured");
  return builder.image(source);
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  coverImage: SanityImageSource;
  publishedAt: string;
  authorName: string;
  content: any;
  relatedProducts?: Array<{ _id: string; title: string }>;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  photo: SanityImageSource;
  linkedinUrl?: string;
  sortOrder: number;
  isActive: boolean;
}
