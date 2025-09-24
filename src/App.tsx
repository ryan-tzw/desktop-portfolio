import { Window } from './components/Window'
import './App.css'
import { DndContext } from '@dnd-kit/core'

function App() {
    return (
        <>
            <div className="h-dvh content-center">
                <h1 className="text-center font-black">Test</h1>
            </div>

            <DndContext>
                <Window title="Drag this window">Drag me!</Window>
            </DndContext>
        </>
    )
}

export default App
