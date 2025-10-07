import { create } from 'zustand'

/**
 * notes:
 * "lazy load" approach: mount windows and add to store only when opened
 * increase z-index when window is focused
 * windows only minimise, so they always stay in the DOM
 */

type WindowState = {
    isMinimised: boolean
    zIndex: number
}

type WindowStore = {
    windows: Map<string, WindowState>
    maxZIndex: number
    open: (id: string) => void
    minimise: (id: string) => void
    bringToFront: (id: string) => void
}

export const useWindowStore = create<WindowStore>((set) => ({
    windows: new Map(),
    maxZIndex: 1,

    open: (id) => {
        console.log('Opening window:', id)

        set((state) => {
            const windows = new Map(state.windows)

            // Either load for the first time, or restore from minimised state
            windows.set(id, {
                isMinimised: false,
                zIndex: state.maxZIndex + 1,
            })

            return {
                windows: windows,
                maxZIndex: state.maxZIndex + 1,
            }
        })
    },

    minimise: (id) => {
        console.log('Minimising window:', id)

        set((state) => {
            const windows = new Map(state.windows)
            const window = windows.get(id)

            if (window) {
                windows.set(id, { ...window, isMinimised: true })
            }

            return { windows: windows }
        })
    },

    bringToFront: (id) => {
        set((state) => {
            const windows = new Map(state.windows)
            const window = windows.get(id)

            if (window && !window.isMinimised) {
                windows.set(id, { ...window, zIndex: state.maxZIndex + 1 })
                return { windows: windows, maxZIndex: state.maxZIndex + 1 }
            }

            return state
        })
    },
}))
