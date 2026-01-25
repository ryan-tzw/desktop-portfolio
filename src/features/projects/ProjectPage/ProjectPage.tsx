import { cn } from '@/lib/utils'
import type { Project } from '@/types'
import { HorizontalDivider, VerticalDivider } from './Divider'
import { ProjectTag } from './ProjectTag'
import { ProjectCarousel } from './ProjectCarousel/ProjectCarousel'
import { CtaButton } from './CtaButton'
import { LinkButton } from './LinkButton'
import { Picture } from '@/components/Picture'
import { ExternalLink } from '@/features/external/ExternalLink'

interface ProjectPageProps {
    project: Project
}

const components = {
    a(props: React.ComponentPropsWithoutRef<'a'>) {
        return <ExternalLink url={props.href!}>{props.children}</ExternalLink>
    },
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
                {'Ryan > Desktop > Dev > ' + project.id + '.html'}
            </span>

            {/* Page content */}
            <article className="mb-4 flex flex-col gap-6 md:mx-12 md:gap-12">
                {/* Hero image */}
                <section>
                    <Picture
                        filePath={`/projects/${project.id}/avif/hero.avif`}
                        className="md:shadow-project-hero md:rounded-lg"
                    />
                </section>

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

                {/* Body */}
                <section className="prose mx-6 w-full max-w-none md:mx-0">
                    {project.content && (
                        <project.content components={components} />
                    )}
                </section>

                {/* Carousel */}
                {project.media && project.media.length > 0 && (
                    <section>
                        <ProjectCarousel media={project.media} />
                    </section>
                )}

                <section
                    className={cn(
                        'mx-6 grid place-items-center gap-4',
                        'md:mx-0 md:flex md:justify-center'
                    )}
                >
                    {project.links.live && (
                        <CtaButton
                            text="Explore the project!"
                            href={project.links.live}
                        />
                    )}
                    <div className="flex gap-4">
                        {project.links.repo && (
                            <LinkButton type="repo" href={project.links.repo} />
                        )}
                        {project.links.download && (
                            <LinkButton
                                type="download"
                                href={project.links.download}
                            />
                        )}
                    </div>
                </section>
            </article>
        </div>
    )
}
