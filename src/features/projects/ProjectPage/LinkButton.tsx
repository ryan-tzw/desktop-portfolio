import { cn } from '@/lib/utils'
import { faCode, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface LinkButtonProps {
    href: string
    type: 'repo' | 'download'
}

export function LinkButton({ href, type }: LinkButtonProps) {
    const icon = type === 'repo' ? faCode : faDownload

    return (
        <a
            className={cn(
                'text-melrose-200 border-melrose-200 border-2',
                'grid aspect-square place-items-center rounded-full p-3'
            )}
            href={href}
            target="_blank"
        >
            <FontAwesomeIcon icon={icon} size="lg" />
        </a>
    )
}
