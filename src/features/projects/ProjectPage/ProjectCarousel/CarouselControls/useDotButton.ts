import type { UseEmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

type EmblaCarouselType = UseEmblaCarouselType[1]

interface UseDotButtonProps {
    emblaApi: EmblaCarouselType
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
}

export function useDotButton({ emblaApi, onButtonClick }: UseDotButtonProps) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
            if (onButtonClick) onButtonClick(emblaApi)
        },
        [emblaApi, onButtonClick]
    )

    const onInit = useCallback(
        (emblaApi: Exclude<EmblaCarouselType, undefined>) => {
            setScrollSnaps(emblaApi.scrollSnapList())
        },
        []
    )

    const onSelect = useCallback(
        (emblaApi: Exclude<EmblaCarouselType, undefined>) => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        },
        []
    )

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)

        emblaApi
            .on('reInit', onInit)
            .on('reInit', onSelect)
            .on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    }
}
