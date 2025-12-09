import type { UseEmblaCarouselType } from 'embla-carousel-react'
import { NextButton, PrevButton } from './PrevNextButtons'
import { usePrevNextButtons } from './usePrevNextButtons'
import { cn } from '@/lib/utils'
import { useDotButton } from './useDotButton'
import { DotButton } from './DotButton'

type EmblaCarouselType = UseEmblaCarouselType[1]

interface CarouselControlsProps extends React.HTMLProps<HTMLDivElement> {
    emblaApi: EmblaCarouselType
}

export function CarouselControls({
    emblaApi,
    className,
    ...props
}: CarouselControlsProps) {
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons({ emblaApi })

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton({
        emblaApi,
    })

    return (
        <div
            className={cn('embla__controls flex justify-between', className)}
            {...props}
        >
            <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
            />

            <div className="flex place-items-center gap-2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => {
                            onDotButtonClick(index)
                        }}
                        isActive={index === selectedIndex}
                    />
                ))}
            </div>

            <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
            />
        </div>
    )
}
