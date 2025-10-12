import { useWindowStore } from '@/stores/windows.store'
import { WINDOW_REGISTRY } from './WindowRegistry'

export function WindowManager() {
    const windows = useWindowStore((state) => state.activeWindows)

    return (
        <>
            {Array.from(windows.entries()).map(([id, params]) => {
                console.log('Rendering window:', id)

                const [windowType] = id.split(':')
                const windowConfig = WINDOW_REGISTRY[windowType]

                if (!windowConfig) {
                    console.warn(`No window config found for: ${windowType}`)
                    return null
                }

                switch (windowConfig.type) {
                    case 'static': {
                        const StaticComponent = windowConfig.component
                        return <StaticComponent key={id} />
                    }
                    case 'project': {
                        const projectId = params.projectId as string
                        const title = params.title as string

                        if (!projectId) {
                            console.warn(`No projectId for window: ${id}`)
                            return null
                        }

                        const ProjectComponent = windowConfig.component
                        return (
                            <ProjectComponent
                                key={id}
                                windowId={id}
                                projectId={projectId}
                                title={title}
                            />
                        )
                    }
                    default:
                        console.warn(`Unknown window type for: ${windowType}`)
                        return null
                }
            })}
        </>
    )
}
