import type { Project, ProjectPreview } from '@/types'
import { ProjectSchema } from '@/types/Project'

type MdxModule = {
    default: React.ComponentType
    meta: Project
}

/**
 * List of projects to display in ProjectsWindow.
 */
export const projects: ProjectPreview[] = [
    {
        id: 'wayfare',
        title: 'Wayfare',
        thumbnail: '/projects/wayfare/thumb.webp',
    },
    {
        id: 'wayfare2',
        title: 'Wayfare',
        thumbnail: '/projects/wayfare/thumb.webp',
    },
    {
        id: 'wayfare3',
        title: 'Wayfare',
        thumbnail: '/projects/wayfare/thumb.webp',
    },
    {
        id: 'wayfare4',
        title: 'Wayfare',
        thumbnail: '/projects/wayfare/thumb.webp',
    },
]

// const mods = import.meta.glob<{ default: Project }>('./*/meta.ts')
const mdxModules = import.meta.glob<MdxModule>('./*.mdx')

/**
 * Loads the full project data for a given project ID.
 */
export async function loadProject(id: string): Promise<Project> {
    const key = `./${id}.mdx`
    const loader = mdxModules[key]
    if (!loader) throw new Error(`Project not found: ${id}`)

    const module = await loader()
    const project = ProjectSchema.parse(module.meta)

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
