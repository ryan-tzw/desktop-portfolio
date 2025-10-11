import { cn } from '@/lib/utils'

interface ProjectCardProps {
    id: string
    image: string
    title: string
}

export function ProjectCard({ id, image, title }: ProjectCardProps) {
    const handleClick = () => {
        console.log(`Project clicked: ${id}`)
    }

    return (
        <>
            <li
                onClick={handleClick}
                className={cn(
                    'cursor-pointer rounded-lg p-2 text-center',
                    'md:p-4',
                    'transition hover:scale-103 hover:bg-neutral-100',
                    'active:scale-97 active:bg-neutral-100'
                )}
            >
                <img
                    src={image}
                    alt={title}
                    className="pointer-events-none w-full rounded-md select-none"
                />
                <h3
                    className={cn(
                        'font-fredoka mt-1 px-2 text-lg',
                        'overflow-hidden text-nowrap text-ellipsis'
                    )}
                >
                    {title}
                </h3>
            </li>
        </>
    )
}
