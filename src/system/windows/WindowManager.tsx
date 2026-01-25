import { useWindowStore } from '@/stores/windows.store'
import { WINDOW_REGISTRY } from './WindowRegistry'

/**
 * This component listens to the window store and renders any active windows.
 * Uses WINDOW_REGISTRY to determine behaviour when rendering each window.
 */
export function WindowManager() {
    const windows = useWindowStore((state) => state.activeWindows)

    return (
        <>
            {Array.from(windows.entries()).map(([id, params]) => {
                console.log('Rendering window:', id)

                // Windows with dynamic content should be prefixed with their type
                // e.g. "project:my-cool-project" or "external:https://example.com"
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
                    case 'external': {
                        const src = params.src as string

                        if (!src) {
                            console.warn(`No src for external window: ${id}`)
                            return null
                        }
                        const ExternalComponent = windowConfig.component
                        return (
                            <ExternalComponent
                                key={id}
                                windowId={id}
                                src={src}
                                title={params.title as string}
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
