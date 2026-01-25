import type { ExternalWindowProps } from '@/features/external/ExternalWindow'
import type { ProjectWindowProps } from '@/features/projects/ProjectWindow'

/** Config for desktop windows (not needed on mobile where windows are full-screen) */
export interface DesktopWindowConfig {
    size?: { width: number; height: number }
    initPosition?: { x: number; y: number }
    /**
     * The transform origin for the scaling up/down animation when opening/closing the window.
     * Coordinates should be relative to the viewport, not the window component itself.
     */
    origin?: { x: number; y: number }
}

/** Props for the Window component */
export interface WindowProps extends React.ComponentPropsWithoutRef<'div'> {
    id: string
    title: string
    config?: DesktopWindowConfig
    children?: React.ReactNode
    className?: string
}

/** Project windows accept a projectId, which it uses to retrieve Project data */
export interface ProjectWindowConfig {
    type: 'project'
    component: React.ComponentType<ProjectWindowProps>
}

export interface StaticWindowConfig {
    type: 'static'
    component: React.ComponentType
}

export interface ExternalWindowConfig {
    type: 'external'
    component: React.ComponentType<ExternalWindowProps>
}

export type WindowConfig =
    | StaticWindowConfig
    | ProjectWindowConfig
    | ExternalWindowConfig
