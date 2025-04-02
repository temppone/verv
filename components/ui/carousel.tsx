"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type CarouselProps = {
  opts?: any;
  plugins?: any[];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: any) => void;
} & React.HTMLAttributes<HTMLDivElement>;

type CarouselApiType = any;

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        loop: true,
      },
      plugins
    );

    const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(false);
    const [nextBtnDisabled, setNextBtnDisabled] = React.useState(false);

    React.useEffect(() => {
      if (emblaApi) {
        setApi?.(emblaApi);
      }
    }, [emblaApi, setApi]);

    const onSelect = React.useCallback((api: CarouselApiType) => {
      setPrevBtnDisabled(!api.canScrollPrev());
      setNextBtnDisabled(!api.canScrollNext());
    }, []);

    React.useEffect(() => {
      if (!emblaApi) return;

      onSelect(emblaApi);
      emblaApi.on("select", onSelect);
      emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div ref={emblaRef} className="overflow-hidden">
          <div
            className={cn(
              "flex",
              orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
            )}
          >
            {children}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute h-8 w-8 bg-transparent",
            orientation === "horizontal"
              ? "top-1/2 -translate-y-1/2 sm:left-4"
              : "top-2 sm:top-4 left-1/2 -translate-x-1/2 rotate-90"
          )}
          disabled={prevBtnDisabled}
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous slide"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          name="arrow-right"
          className={cn(
            "absolute h-8 w-8 bg-transparent",
            orientation === "horizontal"
              ? "top-1/2 -translate-y-1/2 right-2 sm:right-4"
              : "bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 rotate-90"
          )}
          disabled={nextBtnDisabled}
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next slide"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";
