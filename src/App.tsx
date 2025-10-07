import './App.css'
import { Background } from './system/background'
import { Launcher } from './system/layout/Launcher'
import { WindowManager } from './system/windows/WindowManager'

function App() {
    return (
        <>
            <main className="relative z-10 grid h-dvh place-items-center">
                <Launcher />
                <WindowManager />
            </main>

            <Background />
        </>
    )
}

export default App
