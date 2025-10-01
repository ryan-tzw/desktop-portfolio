import { Window } from './components/Window'
import './App.css'
import { Background } from './components/Background'

function App() {
    return (
        <>
            <Background />
            <main className="bg-melrose-200 h-dvh content-center">
                {/* <Window title="Drag this window">Drag me!</Window> */}
            </main>
        </>
    )
}

export default App
