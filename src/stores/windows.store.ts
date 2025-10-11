import type { Project } from '@/types'
import { create } from 'zustand'

/**
 * notes:
 * "lazy load" approach: mount windows and add to store only when opened
 * increase z-index when window is focused
 * windows only minimise, so they always stay in the DOM
 */

type WindowParams = {
    project?: Project
}

type WindowState = {
    isMinimised: boolean
    zIndex: number
}

type WindowStore = {
    /** Currently active windows + params. Used by WindowManager */
    activeWindows: Map<string, WindowParams>
    /** UI state for each active window. Used by individual Window components */
    windowStates: Map<string, WindowState>

    maxZIndex: number
    open: (id: string, params?: WindowParams) => void
    minimise: (id: string) => void
    bringToFront: (id: string) => void
}

export const useWindowStore = create<WindowStore>((set) => ({
    activeWindows: new Map(),
    windowStates: new Map(),
    maxZIndex: 100, // start above other UI elements in the same stacking context

    open: (id, params = {}) => {
        console.log('Opening window:', id)

        set((state) => {
            // Copy existing Maps
            const activeWindows = new Map(state.activeWindows)
            const windowStates = new Map(state.windowStates)

            // Tell WindowManager to render the Window
            activeWindows.set(id, params)

            // Open the window and bring to front
            windowStates.set(id, {
                isMinimised: false,
                zIndex: state.maxZIndex + 1,
            })

            return {
                activeWindows,
                windowStates,
                maxZIndex: state.maxZIndex + 1,
            }
        })
    },

    minimise: (id) => {
        console.log('Minimising window:', id)

        set((state) => {
            const windowStates = new Map(state.windowStates)
            const window = windowStates.get(id)

            if (window) {
                windowStates.set(id, { ...window, isMinimised: true })
            }

            return { windowStates }
        })
    },

    bringToFront: (id) => {
        set((state) => {
            const windowStates = new Map(state.windowStates)
            const window = windowStates.get(id)

            if (!window) return state
            if (window.isMinimised) return state

            const currentZIndex = window.zIndex

            // If it's already the topmost window, do nothing
            if (currentZIndex === state.maxZIndex) return state

            windowStates.set(id, { ...window, zIndex: state.maxZIndex + 1 })
            return { windowStates, maxZIndex: state.maxZIndex + 1 }
        })
    },
}))
