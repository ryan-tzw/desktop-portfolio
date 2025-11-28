declare module '*.mdx' {
    import type { Project } from './Project'

    export const frontmatter: Project
}
