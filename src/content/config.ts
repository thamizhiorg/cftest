import { defineCollection, z } from 'astro:content';
const imageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    imageurl: z.string(),
    dwnurl: z.string(),
    }),
});

export const collections = {
  images: imageCollection,
};
