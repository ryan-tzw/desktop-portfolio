import { Window } from './components/Window'
import './App.css'
import { Background } from './components/Background'
import { Desktop } from './components/Desktop'

function App() {
    return (
        <>
            <main className="relative z-10 h-dvh content-center">
                <Desktop />
                <Window id="test" title="Drag this window">
                    Drag me!
                </Window>
            </main>

            <Background />
        </>
    )
}

export default App
