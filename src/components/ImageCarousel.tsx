"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  categoryName: string;
}

export default function ImageCarousel({ images, categoryName }: ImageCarouselProps) {
  const hasMultiple = images.length > 1;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: hasMultiple, active: hasMultiple });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full">
      {/* Slides */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <Image
                src={src}
                alt={`${categoryName} ${i + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows — แสดงเฉพาะเมื่อมีมากกว่า 1 รูป */}
      {hasMultiple && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#f47920]/80 hover:bg-[#f47920] text-white rounded-full p-2.5 shadow-lg transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#f47920]/80 hover:bg-[#f47920] text-white rounded-full p-2.5 shadow-lg transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex ? "bg-[#f47920] w-5" : "bg-white/60 w-2"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
