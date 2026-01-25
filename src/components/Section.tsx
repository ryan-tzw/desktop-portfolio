import { cn } from '@/lib/utils'

interface SectionProps {
    title: string
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'small'
}

export function Section({
    title,
    children,
    className = '',
    variant = 'default',
}: SectionProps) {
    return (
        <section className={className}>
            <h1
                className={cn(
                    'font-fredoka w-fit font-light',
                    variant === 'small'
                        ? 'mb-4 text-2xl'
                        : 'mx-auto mb-8 text-4xl'
                )}
            >
                <span
                    className={cn(
                        variant === 'small'
                            ? 'tilt-highlight'
                            : 'fixed-tilt-highlight'
                    )}
                >
                    {title}
                </span>
            </h1>
            {children}
        </section>
    )
}
