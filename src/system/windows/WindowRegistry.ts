import { AboutWindow } from '@/views/AboutWindow'
import type { WindowConfig } from './Window/types'
import { ProjectWindow } from '@/views/ProjectWindow'

export const WINDOW_REGISTRY: Record<string, WindowConfig> = {
    about: {
        component: AboutWindow,
        type: 'static',
    },
    project: {
        component: ProjectWindow,
        type: 'project',
    },
} as const
