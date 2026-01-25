declare module '*.mdx' {
    import type { ComponentType } from 'react'
    import type { Project } from './Project'

    export const meta: Project

    const MDXComponent: ComponentType
    export default MDXComponent
}
