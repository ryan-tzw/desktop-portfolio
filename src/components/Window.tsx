import { Rnd } from 'react-rnd'

export interface WindowProps {
    width?: number
    height?: number
    children?: React.ReactNode
}

export function Window({ width = 320, height = 200, children }: WindowProps) {
    const defaultX = window.innerWidth / 2 - width / 2
    const defaultY = window.innerHeight / 2 - height / 2

    return (
        <>
            <Rnd
                default={{
                    x: defaultX,
                    y: defaultY,
                    width: width,
                    height: height,
                }}
            >
                {children}
            </Rnd>
        </>
    )
}
