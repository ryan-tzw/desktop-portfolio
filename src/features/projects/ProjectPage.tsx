import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectPageProps {
    project: Project
}

export function ProjectPage({ project }: ProjectPageProps) {
    return (
        <div className="flex flex-col py-4">
            {/* Breadcrumbs */}
            <span
                className={cn(
                    'text-sm font-medium text-gray-500',
                    'mx-6 mb-4 md:mb-6'
                )}
            >
                {'Ryan > Desktop > Dev > ' + project.title}
            </span>

            {/* Page content */}
            <main className="flex flex-col gap-6 md:mx-12 md:gap-10">
                {/* Hero image */}
                <section>
                    <img
                        src={project.heroImage}
                        className="md:shadow-project-hero md:rounded-lg"
                    />
                </section>

                {/* Body */}
                <article>
                    <p className="mx-6 whitespace-pre-line md:mx-0">
                        {project.description}
                    </p>
                </article>
            </main>
        </div>
    )
}
