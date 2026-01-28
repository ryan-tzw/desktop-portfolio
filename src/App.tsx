import './App.css'
import { useEffect } from 'react'
import { Taskbar } from './components/Taskbar'
import { Background } from './system/background'
import { Launcher } from './system/layout/Launcher'
import { WindowManager } from './system/windows/WindowManager'
import { useWindowStore } from './stores/windows.store'

function App() {
    const open = useWindowStore((state) => state.open)

    // on mount check for ?window= or ?project= in URL to open specific window
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const windowId = params.get('window')
        const projectId = params.get('project')

        if (projectId) {
            open('project', { projectId })
        } else if (windowId) {
            open(windowId)
        }
    }, [open])

    return (
        <>
            <Taskbar />

            <main className="relative z-10 grid h-dvh place-items-center">
                <Launcher />
                <WindowManager />
            </main>

            <Background />
        </>
    )
}

export default App
