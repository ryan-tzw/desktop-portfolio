import { faSquare, faWindowMinimize } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Rnd } from 'react-rnd'

export interface WindowProps {
    title: string
    width?: number
    height?: number
    children?: React.ReactNode
}

export function Window({
    title,
    width = 480,
    height = 300,
    children,
}: WindowProps) {
    const defaultX = window.innerWidth / 2
    const defaultY = window.innerHeight / 2

    return (
        <Rnd
            default={{
                x: defaultX,
                y: defaultY,
                width: width,
                height: height,
            }}
            minHeight={200}
            minWidth={300}
            maxHeight={400}
            maxWidth={600}
            dragHandleClassName="handle"
            bounds={'window'}
            className="overflow-hidden rounded-xl shadow-md backdrop-blur-xs"
        >
            <div className="flex h-full flex-col">
                <div className="handle flex h-16 cursor-move text-white">
                    <p className="font-fredoka flex-1 content-center bg-[rgba(0,0,0,0.7)] px-6 text-lg">
                        {title}
                    </p>
                    <button
                        className="bg-[rgba(0,0,0,0.7)] px-4 hover:bg-[rgba(32,32,32,0.7)]"
                        onClick={() => alert('Minimize')}
                    >
                        <FontAwesomeIcon icon={faWindowMinimize} />
                    </button>
                    <button className="bg-[rgba(0,0,0,0.7)] px-4 hover:bg-[rgba(32,32,32,0.7)]">
                        <FontAwesomeIcon icon={faSquare} />
                    </button>
                    <button className="bg-[rgba(0,0,0,0.7)] px-4 hover:bg-[rgba(128,0,0,0.7)]">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="flex-1 bg-[rgba(255,255,255,0.8)] px-6 py-4">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}
