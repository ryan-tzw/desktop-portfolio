import { cn } from '@/lib/utils'
import type { Project } from '@/types'
import { HorizontalDivider, VerticalDivider } from './Divider'
import { ProjectTag } from './ProjectTag'
import { ProjectCarousel } from './ProjectCarousel/ProjectCarousel'

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
            <article className="mb-12 flex flex-col gap-6 md:mx-12 md:gap-10">
                {/* Hero image */}
                <section>
                    <img
                        src={project.heroImage}
                        className="md:shadow-project-hero md:rounded-lg"
                    />
                </section>

                {/* Body */}
                <section className="mx-6 md:mx-0">
                    <h1 className="font-fredoka mb-6 text-center text-4xl font-light">
                        About this project
                    </h1>
                    <p className="whitespace-pre-line">{project.description}</p>
                </section>

                {/* Carousel */}
                {project.media && project.media.length > 0 && (
                    <section>
                        <ProjectCarousel images={project.media} />
                    </section>
                )}

                {/* Skills and tools */}
                <section className="mx-6 flex flex-col md:mx-0 md:flex-row">
                    {/* Section header */}
                    <div className="flex flex-row items-center gap-5 md:items-start">
                        <HorizontalDivider className="md:hidden" />
                        <div className="text-neutral-500">
                            <span className="md:block">Skills </span>
                            <span className="whitespace-nowrap md:block">
                                & Tools
                            </span>
                        </div>
                        <HorizontalDivider className="md:hidden" />

                        <VerticalDivider className="hidden md:block" />
                    </div>

                    {/* Pills */}
                    <ul className="mt-3 flex flex-wrap gap-2 md:mt-0 md:ml-5">
                        {project.tags.map((tag, index) => (
                            <ProjectTag tag={tag} key={index} />
                        ))}
                    </ul>
                </section>
            </article>
        </div>
    )
}
