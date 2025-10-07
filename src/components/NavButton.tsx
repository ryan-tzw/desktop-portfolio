import { cn } from '@/lib/utils'
import { useWindowStore } from '@/stores/windows.store'

interface NavButtonProps {
    id: string
    image: string
    text: string
}

export function NavButton({ id, image, text }: NavButtonProps) {
    const open = useWindowStore((state) => state.open)

    return (
        <>
            <button
                onClick={() => open(id)}
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
