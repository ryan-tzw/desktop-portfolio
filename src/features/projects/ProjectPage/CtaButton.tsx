import { cn } from '@/lib/utils'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface CtaButtonProps {
    text: string
    href: string
}

export function CtaButton({ text, href }: CtaButtonProps) {
    return (
        <a
            className={cn(
                'group bg-melrose-50 flex w-full max-w-lg rounded-full font-bold',
                'relative z-1 overflow-hidden transition-all'
            )}
            href={href}
            target="_blank"
        >
            <div
                className={cn(
                    'bg-melrose-200 absolute -z-1 h-full w-full rounded-full transition-all',
                    'translate-x-[-100%] duration-400 ease-in-out group-hover:translate-x-0'
                )}
            />

            <div
                className={cn(
                    'grid aspect-square h-full place-items-center rounded-full p-5',
                    'bg-melrose-200'
                )}
            >
                <FontAwesomeIcon
                    icon={faArrowRight}
                    size="lg"
                    className={cn(
                        '-rotate-45 transition-all duration-400 ease-out',
                        'group-hover:translate-x-1 group-hover:scale-130 group-hover:rotate-0'
                    )}
                />
            </div>
            <span className="-ml-5 grid flex-1 place-items-center text-xl">
                {text}
            </span>
        </a>
    )
}
