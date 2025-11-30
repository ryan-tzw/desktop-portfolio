import { cn } from '@/lib/utils'

interface DividerProps {
    className?: string
}

export function HorizontalDivider({ className }: DividerProps) {
    return (
        <div
            className={cn(
                'h-0.25 flex-1 rounded-full bg-neutral-400',
                className
            )}
        />
    )
}

export function VerticalDivider({ className }: DividerProps) {
    return <div className={cn('h-full w-0.25 bg-neutral-400', className)} />
}
