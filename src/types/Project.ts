type Tag = {
    name: string
    type: 'domain' | 'language' | 'library' | 'tool' | 'other'
}

export type Project = {
    id: string
    title: string
    description: string
    heroImage: string
    media?: string[]
    links: {
        repo?: string
        live?: string
        download?: string
    }
    tags: Tag[]
}
