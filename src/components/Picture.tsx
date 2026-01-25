interface PictureProps {
    filePath: string
    className?: string
}

/**
 * Picture component - serves AVIF, WebP, and JPG formats
 * @param filePath - base file path, assumed to be avif but technically can be any
 * @param className - optional CSS classes for the img element
 */
export function Picture({ filePath, className }: PictureProps) {
    const avif = filePath.split('.')[0] + '.avif'
    const webp = filePath.split('.')[0] + '.webp'
    const jpg = filePath.split('.')[0] + '.jpg'

    return (
        <>
            <picture className="h-full">
                <source srcSet={avif} type="image/avif" />
                <source srcSet={webp} type="image/webp" />
                <img src={jpg} className={className} />
            </picture>
        </>
    )
}
