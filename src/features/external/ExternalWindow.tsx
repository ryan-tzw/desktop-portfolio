import { Window } from '@/system/windows/Window'

export interface ExternalWindowProps {
    windowId: string
    src: string
    title: string
}

export function ExternalWindow({ windowId, src }: ExternalWindowProps) {
    return (
        <Window
            id={windowId}
            title={src}
            config={{ size: { width: 800, height: 600 } }}
        >
            <iframe
                src={src}
                className="h-full w-full border-0"
                title="External Content"
            />
        </Window>
    )
}
