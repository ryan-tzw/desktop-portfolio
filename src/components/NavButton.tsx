import { cn } from '@/lib/utils'

interface NavButtonProps {
    image: string
    text: string
    onClick: () => void
}

export function NavButton({ image, text, onClick }: NavButtonProps) {
    return (
        <>
            <button
                onClick={onClick}
                className={cn(
                    'flex flex-col items-center rounded-lg p-4',
                    'transition hover:scale-105 hover:bg-[rgba(0,0,0,0.05)]',
                    'active:scale-95 active:bg-[rgba(0,0,0,0.05)]'
                )}
            >
                <img
                    src={image}
                    alt={text}
                    className="pointer-events-none h-16 w-16 select-none"
                />
                <span className="font-fredoka mt-2 block">{text}</span>
            </button>
        </>
    )
}
