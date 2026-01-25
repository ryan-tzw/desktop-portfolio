import { TitleBar } from './TitleBar'
import { CloseButton } from './CloseButton'
import { cn } from '@/lib/utils'
import { useDraggableWindow } from './hooks/useDraggableWindow'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useWindowStore } from '@/stores/windows.store'
import { useEffect, useRef } from 'react'
import type { WindowProps } from './types'

export function Window({
    id,
    title,
    config = {},
    children,
    className = '',
}: WindowProps) {
    const isMobile = useIsMobile()
    const zIndex = useWindowStore((state) => state.windowStates.get(id)!.zIndex)
    const bringToFront = useWindowStore((state) => state.bringToFront)
    const minimise = useWindowStore((state) => state.minimise)
    const minimised = useWindowStore(
        (state) => state.windowStates.get(id)?.isMinimised
    )
    const hasAnimatedIn = useRef(false)

    // Desktop-only draggable window
    const { style, dragProps, dragHandleProps } = useDraggableWindow({
        id,
        disabled: isMobile,
        config: config,
    })

    useEffect(() => {
        // initial mount, starts at scale 0; after first render, scale 100 allows anim to play
        hasAnimatedIn.current = true
    }, [])

    const isVisible = !minimised && hasAnimatedIn.current

    return (
        <div
            {...(!isMobile && dragProps)}
            style={{ ...style, zIndex }}
            className={cn(
                'flex flex-col overflow-hidden shadow-lg backdrop-blur-xs',
                'transition duration-300 md:transition-[scale,opacity]',
                'md:border',
                'rounded-t-xl md:rounded-xl',
                isVisible
                    ? 'translate-y-0 opacity-100 md:scale-100'
                    : 'pointer-events-none translate-y-full opacity-0 md:translate-y-0 md:scale-0'
            )}
            onPointerDownCapture={() => bringToFront(id)}
        >
            <TitleBar title={title} {...(!isMobile && dragHandleProps)}>
                <CloseButton onClick={() => minimise(id)} />
            </TitleBar>

            <div
                className={cn(
                    'flex-1 overflow-auto bg-white',
                    'rounded-none md:rounded-b-xl',
                    className
                )}
            >
                {children}
            </div>
        </div>
    )
}
