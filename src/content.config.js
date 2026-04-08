import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema:z.object({
        title:z.string(),
        description:z.string(),
        image:z.string().url()
    })
})

export const postsBlog = {posts}