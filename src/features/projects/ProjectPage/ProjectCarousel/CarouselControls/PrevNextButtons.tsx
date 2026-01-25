import { cn } from '@/lib/utils'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BaseButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { children, className, ...otherProps } = props

    return (
        <button
            className={cn(
                'grid h-10 w-10 cursor-pointer place-content-center rounded-full p-3',
                'transition-all hover:scale-110 hover:bg-neutral-100 active:scale-95 active:bg-neutral-100',
                className
            )}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    )
}

export function PrevButton(
    props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <BaseButton className="embla__prev" {...props}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </BaseButton>
    )
}

export function NextButton(
    props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <BaseButton className="embla__next" {...props}>
            <FontAwesomeIcon icon={faAngleRight} />
        </BaseButton>
    )
}
