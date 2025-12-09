import type { UseEmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

type EmblaCarouselType = UseEmblaCarouselType[1]

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

interface UsePrevNextButtonsProps {
    emblaApi: EmblaCarouselType
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
}

export function usePrevNextButtons({
    emblaApi,
    onButtonClick,
}: UsePrevNextButtonsProps): UsePrevNextButtonsType {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onSelect = useCallback(
        (emblaApi: Exclude<EmblaCarouselType, undefined>) => {
            setPrevBtnDisabled(!emblaApi.canScrollPrev())
            setNextBtnDisabled(!emblaApi.canScrollNext())
        },
        []
    )

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    }
}
