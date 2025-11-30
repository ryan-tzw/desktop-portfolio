import { cn } from '@/lib/utils'
import type { Tag } from '@/types/Project'

interface ProjectTagProps {
    tag: Tag
}

export function ProjectTag({ tag }: ProjectTagProps) {
    const bgColorClass = () => {
        switch (tag.type) {
            case 'domain':
                return 'bg-orange-300'
            case 'language':
                return 'bg-blue-300'
            case 'library':
                return 'bg-purple-300'
            case 'tool':
                return 'bg-rose-300'
            case 'other':
                return 'bg-emerald-300'
            default:
                return 'bg-gray-300'
        }
    }

    return (
        <li
            className={cn(
                'h-fit w-fit rounded-full bg-rose-300 px-4 py-2 text-sm',
                bgColorClass()
            )}
        >
            {tag.name}
        </li>
    )
}
