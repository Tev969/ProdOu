import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({image}) => z.object({
        title: z.string(),
        intro: z.string(),
        tag: z.string(),
        image: image().optional(),
        author: reference('author'),
        pubDate: z.date(),
        type: z.string().optional(),
    }),
});



const pageCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({image}) => z.object({
        title: z.string(),
        intro: z.string(),
        image: image().optional(),
        type: z.string().optional(),
    }),
});

const authorCollection = defineCollection({
    type: 'data', // v2.5.0 and later
    schema: ({image}) => z.object({
        displayName: z.string(),
        bio: z.string().optional(),
        photo: image().optional()
    }),
});

const farmerCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        intro: z.string(),
        location: z.string(),
        image: image().optional(),
        contact: z.string().optional(),
        pubDate: z.string().or(z.date()), 
        type: z.string().optional(), 
        
    }),
});


export const collections = {
    'blog': blogCollection,
    'author': authorCollection,
    'page': pageCollection,
    'farmer': farmerCollection, 
};