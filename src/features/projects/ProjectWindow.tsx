import { loadProject } from '@/data/projects'
import { Window } from '@/system/windows/Window'
import type { Project } from '@/types'
import { useEffect, useState } from 'react'

export interface ProjectWindowProps {
    windowId: string
    projectId: string
    title: string
}

export function ProjectWindow({
    windowId,
    projectId,
    title,
}: ProjectWindowProps) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [project, setProject] = useState<Project | null>(null)

    // On mount, load the project data
    useEffect(() => {
        const loadProjectData = async () => {
            try {
                setLoading(true)
                const projectData = await loadProject(projectId)
                setProject(projectData)
            } catch (error) {
                console.error('Error loading project:', error)
                setError('Failed to load project data.')
            } finally {
                setLoading(false)
            }
        }

        loadProjectData()
    }, [projectId])

    return (
        <Window
            id={windowId}
            title={title}
            config={{ size: { width: 800, height: 600 } }}
        >
            {loading && (
                <div className="grid h-full place-items-center">
                    Loading project...
                </div>
            )}
            {error && (
                <div className="grid h-full place-items-center text-red-500">
                    {error}
                </div>
            )}

            {project && (
                <div>
                    <img src={project.heroImage}></img>
                    <p>{project.description}</p>
                </div>
            )}
        </Window>
    )
}
