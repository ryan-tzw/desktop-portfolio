import type { WindowConfig } from './Window/types'
import { AboutWindow } from '@/features/about/AboutWindow'
import { ContactWindow } from '@/features/contact/ContactWindow'
import { ExternalWindow } from '@/features/external/ExternalWindow'
import { ProjectWindow } from '@/features/projects/ProjectWindow'
import { ProjectsWindow } from '@/features/projects/ProjectsWindow'

/**
 * Registry of all available windows in the system.
 * Used by WindowManager to render windows based on the active windows in the store.
 *
 * Types:
 * - static: always the same window instance (e.g. About, Projects)
 * - project: tied to a specific project. Props passed in to dynamically render.
 * - external: displays external content in an iframe.
 */
export const WINDOW_REGISTRY: Record<string, WindowConfig> = {
    about: {
        component: AboutWindow,
        type: 'static',
    },
    dev: {
        component: ProjectsWindow,
        type: 'static',
    },
    project: {
        component: ProjectWindow,
        type: 'project',
    },
    contact: {
        component: ContactWindow,
        type: 'static',
    },
    external: {
        component: ExternalWindow,
        type: 'external',
    },
} as const
