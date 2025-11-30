import type { Project, ProjectPreview } from '@/types'

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

const mods = import.meta.glob<{ default: Project }>('./*/meta.ts')

export async function loadProject(id: string): Promise<Project> {
    const key = `./${id}/meta.ts`
    const loader = mods[key]
    if (!loader) throw new Error(`Project not found: ${id}`)
    const mod = await loader()
    return mod.default
}
