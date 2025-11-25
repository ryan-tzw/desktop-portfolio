import { cn } from '@/lib/utils'

interface ChatBubbleProps {
    children?: React.ReactNode
    className?: string
}

export function ChatBubble({ children, className }: ChatBubbleProps) {
    return (
        <div
            className={cn(
                'bg-melrose-100 w-fit rounded-xl px-5 py-4',
                className
            )}
        >
            {children}
        </div>
    )
}
