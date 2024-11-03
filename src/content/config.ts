import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
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
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		images: z.string().array(),
		// tags: z.string().array()
	}),
});

export const collections = { blog, project };
