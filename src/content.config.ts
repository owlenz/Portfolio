import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.string().array(),
	}),
});

const project = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/project" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		images: z.string().array(),
		// tags: z.string().array()
	}),
});

export const collections = { blog, project };
