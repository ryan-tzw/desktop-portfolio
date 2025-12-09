import { cn } from '@/lib/utils'

interface DotButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean
}

export function DotButton({
    isActive = false,
    children,
    className,
    ...otherProps
}: DotButtonProps) {
    return (
        <>
            <button
                className={cn(
                    'h-3 w-3 cursor-pointer rounded-full',
                    'transition-all hover:scale-110 active:scale-95',
                    isActive ? 'bg-neutral-400' : 'bg-neutral-200',
                    className
                )}
                {...otherProps}
            >
                {children}
            </button>
        </>
    )
}
