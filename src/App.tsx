import { Window } from './components/Window'
import './App.css'
import { Taskbar } from './components/Taskbar'
import { DndContext } from '@dnd-kit/core'
import { Draggable } from './components/DraggableTest'

function App() {
    return (
        <>
            {/* <Taskbar /> */}
            {/* <div className="h-dvh content-center">
                <h1 className="text-center font-black">Test</h1>
            </div> */}
            <DndContext>
                <Window title="My First Window">
                    <h2 className="font-manrope">Hello, World!</h2>
                </Window>
                <Draggable>Drag me!</Draggable>
            </DndContext>
        </>
    )
}

export default App
