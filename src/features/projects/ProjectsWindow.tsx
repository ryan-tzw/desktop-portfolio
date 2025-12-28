import { projects } from '@/data/projects'
import { Window } from '@/system/windows/Window'
import { ProjectCard } from './ProjectCard'
import { cn } from '@/lib/utils'

/**
 * Projects Window - lists all projects
 *
 * Retrieve project data from /src/data/projects
 */
export function ProjectsWindow() {
    return (
        <Window
            id="dev"
            title="Dev Projects"
            config={{ size: { width: 800, height: 800 } }}
            className="overflow-auto p-2 md:p-4"
        >
            <ul
                className={cn(
                    'grid list-none gap-2',
                    'grid-cols-2',
                    'md:grid-cols-3'
                )}
            >
                {projects.map((proj) => (
                    <ProjectCard
                        key={proj.id}
                        id={proj.id}
                        title={proj.id + '.html'}
                        image={proj.preview}
                    />
                ))}
            </ul>
        </Window>
    )
}
