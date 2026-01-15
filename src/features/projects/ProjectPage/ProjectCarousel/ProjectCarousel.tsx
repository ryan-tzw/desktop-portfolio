import useEmblaCarousel from 'embla-carousel-react'
import { CarouselControls } from './CarouselControls/CarouselControls'
import { useCallback, useEffect, useRef } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

interface ProjectCarouselProps {
    images: string[]
}

const TWEEN_FACTOR_BASE = 0.2

export function ProjectCarousel({ images }: ProjectCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        active: images.length > 1,
    })
    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector(
                '.embla__parallax__layer'
            ) as HTMLElement
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenParallax = useCallback((emblaApi: EmblaCarouselType) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const translate =
                    diffToTarget * (-1 * tweenFactor.current) * 100
                const tweenNode = tweenNodes.current[slideIndex]
                if (tweenNode) {
                    tweenNode.style.transform = `translateX(${translate}%)`
                }
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenParallax(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax)
    }, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor])

    return (
        <div className="embla mx-auto">
            {/* Viewport */}
            <div className="overflow-hidden">
                <div
                    className="embla__viewport mx-auto aspect-[4/3] w-[60%]"
                    ref={emblaRef}
                >
                    <div className="embla__container -ml-4 flex h-full">
                        {images.map((src, index) => (
                            <div
                                className="embla__slide shrink-0 grow-0 basis-1/1 pl-4 md:basis-[100%]"
                                key={index}
                            >
                                <div className="embla__parallax h-full overflow-hidden md:rounded-xl">
                                    <div className="embla__parallax__layer relative flex h-full w-full justify-center">
                                        <img
                                            src={src}
                                            className="aspect-[4/3] h-full scale-110 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Controls */}
            {images.length > 1 && (
                <CarouselControls
                    emblaApi={emblaApi}
                    className="p-2 md:mx-[20%]"
                />
            )}
        </div>
    )
}
