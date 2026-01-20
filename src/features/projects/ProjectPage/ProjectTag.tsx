import { cn } from '@/lib/utils'
import type { Tag } from '@/types/Project'

interface ProjectTagProps {
    tag: Tag
}

export function ProjectTag({ tag }: ProjectTagProps) {
    const bgColorClass = () => {
        switch (tag.type) {
            case 'domain':
                return 'bg-rose-300'
            case 'language':
                return 'bg-blue-300'
            case 'library':
                return 'bg-melrose-300'
            case 'tool':
                return 'bg-emerald-200'
            case 'other':
                return 'bg-slate-300'
            default:
                return 'bg-slate-300'
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
