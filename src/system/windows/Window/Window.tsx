import { TitleBar } from './TitleBar'
import { CloseButton } from './CloseButton'
import { cn } from '@/lib/utils'
import { useDraggableWindow } from './hooks/useDraggableWindow'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useWindowStore } from '@/stores/windows.store'
import { useEffect, useRef } from 'react'

interface WindowProps {
    id: string
    title: string
    width?: number
    height?: number
    children?: React.ReactNode
    className?: string
}

export function Window({
    id,
    width = 400,
    height = 300,
    title,
    children,
    className = '',
}: WindowProps) {
    const isMobile = useIsMobile()
    const minimise = useWindowStore((state) => state.minimise)
    const minimised = useWindowStore(
        (state) => state.windows.get(id)?.isMinimised
    )
    const hasAnimatedIn = useRef(false)

    const rootRef = useRef<HTMLDivElement>(null)

    const { style, dragProps, dragHandleProps } = useDraggableWindow({
        id,
        size: { width, height },
        disabled: isMobile,
    })

    useEffect(() => {
        // on first mount, starts out scale 0
        // then after first render, set to scale 100 to allow anim to play
        hasAnimatedIn.current = true

        // const rect = rootRef.current!.getBoundingClientRect()
        // const windowMiddleCoords = {
        //     x: rect.left + rect.width / 2,
        //     y: rect.top + rect.height / 2,
        // }
        // const offsetFromCenter = {
        //     x: windowMiddleCoords.x - window.innerWidth / 2,
        //     y: windowMiddleCoords.y - window.innerHeight / 2,
        // }
    }, [])

    const isVisible = !minimised && hasAnimatedIn.current

    return (
        <div
            ref={rootRef}
            {...(!isMobile && dragProps)}
            style={style}
            className={cn(
                'flex flex-col overflow-hidden shadow-lg backdrop-blur-xs',
                'transition md:transition-[scale,opacity]',
                'rounded-t-xl md:rounded-xl',
                isVisible
                    ? 'scale-100 opacity-100'
                    : 'pointer-events-none scale-0 opacity-0'
            )}
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
