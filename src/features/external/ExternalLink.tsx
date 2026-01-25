import { useWindowStore } from '@/stores/windows.store'

interface ExternalLinkProps {
    url: string
    children?: React.ReactNode
}

export function ExternalLink({ url, children }: ExternalLinkProps) {
    const open = useWindowStore((state) => state.open)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        console.log(`External link clicked: ${url}`)
        const windowId = `external:${url}`
        open(windowId, { src: url })
    }

    return (
        <a onClick={handleClick} href={url}>
            {children}
        </a>
    )
}
