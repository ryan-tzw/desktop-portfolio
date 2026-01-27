import { cn } from '@/lib/utils'

interface SocialButtonProps {
    href: string
    children?: React.ReactNode
}

export function SocialButton({ href, children }: SocialButtonProps) {
    return (
        <a
            className={cn(
                'aspect-square h-12 rounded-full',
                'grid place-items-center overflow-hidden',
                'shadow-solid bg-white',
                'active:translate-y-1 active:shadow-none'
            )}
            href={href}
            target="_blank"
        >
            {children}
        </a>
    )
}
