import { AboutWindow } from '@/features/about/AboutWindow'
import { useWindowStore } from '@/stores/windows.store'
import { useShallow } from 'zustand/react/shallow'

/**
 * This component renders open windows
 */

const DEFAULT_WINDOWS = {
    about: AboutWindow,
} as const

export function WindowManager() {
    const windows = useWindowStore(
        useShallow((state) => Array.from(state.windows.keys()))
    )

    return (
        <>
            {Array.from(windows).map((id) => {
                console.log('Rendering window:', id)
                const WindowComponent =
                    DEFAULT_WINDOWS[id as keyof typeof DEFAULT_WINDOWS]

                return WindowComponent ? <WindowComponent key={id} /> : null
            })}
        </>
    )
}
