import type { Project } from '@/types'
import { ProjectSchema } from '@/types/Project'

type MdxModule = {
    default: React.ComponentType
    meta: Project
}

const mdxModules = import.meta.glob<MdxModule>('./*.mdx')
const avifModules = import.meta.glob<{ default: string }>(
    '/public/projects/**/*.avif',
    { eager: true }
)
const mp4Modules = import.meta.glob<{ default: string }>(
    '/public/projects/**/*.mp4',
    { eager: true }
)

/**
 * List of projects IDs to display in ProjectsWindow.
 */
const projects: string[] = []
for (const key of Object.keys(mdxModules)) {
    const id = key.split('./')[1].split('.')[0]
    projects.push(id)
}
export { projects }

/**
 * Loads the full project data for a given project ID.
 */
export async function loadProject(id: string): Promise<Project> {
    const key = `./${id}.mdx`
    const loader = mdxModules[key]
    if (!loader) throw new Error(`Project not found: ${id}`)

    const module = await loader()
    const media: string[] = []

    for (const [k, v] of Object.entries(avifModules)) {
        if (
            k.includes(`/projects/${id}/`) &&
            !k.includes('hero') &&
            !k.includes('preview')
        ) {
            media.push(v.default)
        }
    }

    for (const [k, v] of Object.entries(mp4Modules)) {
        if (k.includes(`/projects/${id}/`)) {
            media.push(v.default)
        }
    }

    const project = ProjectSchema.parse(module.meta)
    project.media = [...media]

    return project
}

/**
 * Loads the blog content for a given project ID.
 */
export async function loadBlog(id: string): Promise<React.ComponentType> {
    const key = `./${id}.mdx`
    const loader = mdxModules[key]
    if (!loader) throw new Error(`Project not found: ${id}`)

    const module = await loader()
    const BlogContent = module.default

    return BlogContent
}
