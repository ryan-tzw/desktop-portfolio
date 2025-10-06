import './App.css'
import { Background } from './components/Background'
import { Desktop } from './components/Desktop'
import { About } from './windows/About'

function App() {
    return (
        <>
            <main className="relative z-10 grid h-dvh place-items-center">
                <Desktop />
                <About />
            </main>

            <Background />
        </>
    )
}

export default App
