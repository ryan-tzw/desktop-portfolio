import type { Project, ProjectPreview } from '@/types'
import { ProjectSchema } from '@/types/Project'

type MdxModule = {
    default: React.ComponentType
    meta: Project
}

const mdxModules = import.meta.glob<MdxModule>('./*.mdx')

/**
 * List of projects to display in ProjectsWindow.
 */
const projects: ProjectPreview[] = []
for (const key of Object.keys(mdxModules)) {
    const id = key.split('./')[1].split('.')[0]
    projects.push({
        id: id,
        preview: `/projects/${id}/preview.webp`,
    })
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
