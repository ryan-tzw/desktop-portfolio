import { TitleBar } from './TitleBar'
import { CloseButton } from './CloseButton'
import { cn } from '@/lib/utils'
import { useDraggableWindow } from '@/components/Window/useDraggableWindow'
import { useIsMobile } from '@/hooks/useIsMobile'

interface WindowProps {
    id: string
    title: string
    width?: number
    height?: number
    children?: React.ReactNode
}

export function Window({
    id,
    width = 400,
    height = 300,
    title,
    children,
}: WindowProps) {
    const isMobile = useIsMobile()

    const { style, dragProps, dragHandleProps } = useDraggableWindow({
        id,
        width,
        height,
        disabled: isMobile,
    })

    const mobileStyle: React.CSSProperties = {
        position: 'fixed',
        inset: 0,
        width: '100dvw',
        height: '100dvh',
    }

    return (
        <div
            {...(!isMobile && dragProps)}
            style={isMobile ? mobileStyle : style}
            className={cn(
                'flex flex-col overflow-hidden shadow-lg backdrop-blur-xs',
                isMobile ? 'rounded-t-xl' : 'rounded-xl'
            )}
        >
            <TitleBar title={title} {...(!isMobile && dragHandleProps)}>
                <CloseButton />
            </TitleBar>

            <div
                className={cn(
                    'flex-1 border border-white bg-white',
                    isMobile ? 'rounded-none' : 'rounded-b-xl'
                )}
            >
                {children}
            </div>
        </div>
    )
}
