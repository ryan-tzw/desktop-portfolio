import type { MDXProps } from 'mdx/types'
import * as z from 'zod'

export const TagSchema = z.object({
    name: z.string(),
    type: z.enum(['domain', 'language', 'library', 'tool', 'other']),
})

export const ProjectSchema = z.object({
    id: z.string(),
    title: z.string(),
    media: z.array(z.string()).optional(),
    links: z.object({
        repo: z.string().optional(),
        live: z.string().optional(),
        download: z.string().optional(),
    }),
    tags: z.array(TagSchema),
})

export type Tag = z.infer<typeof TagSchema>
export type Project = z.infer<typeof ProjectSchema> & {
    content: React.ComponentType<MDXProps>
}
