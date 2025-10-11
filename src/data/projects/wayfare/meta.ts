import type { Project } from '@/types'

const project: Project = {
    id: 'wayfare',
    title: 'Wayfare',
    description:
        'A hotel booking website for an academic project. Built with React, TypeScript and the Mantine UI library, with a custom 3D hero section using Three.js, React Three Fiber, and custom GLSL shaders.\n\nThis was my first experience building a full-stack application as part of a large team project (8 people), and I learned a lot from it. Too much to talk about in this little modal, so check out the GitHub repo for more details!',
    heroImage: '/projects/wayfare/hero.jpg',
    // media: ['/projects/wayfare/1.jpg'],
    links: {
        repo: 'https://github.com/Term-5-CSD-ESC-Ascenda-BNB/web',
        live: 'https://esc-fe.ryanteozw.workers.dev/',
    },
    tags: [
        { name: 'Web Development', type: 'domain' },
        { name: 'Computer Graphics', type: 'domain' },
        { name: 'React', type: 'library' },
        { name: 'TypeScript', type: 'language' },
        { name: 'Three.js', type: 'library' },
        { name: 'GLSL', type: 'language' },
        { name: 'Mantine UI', type: 'library' },
        { name: 'Figma', type: 'tool' },
        { name: 'Git', type: 'tool' },
    ],
}

export default project
