"use client"
import { useEffect, useState, useRef, Children } from "react";

type Images = {
    images: string[];
    navButtons?: boolean;
    width?: number;
    height?: number;
    autoPlay: boolean;
    dots?:boolean;
    activeDotColor?: string;
    inactiveDotColor?: string;
    dotWidth?: number;
    dotHeight?:number;
    dotRadius?:number;
    nextArrow?: React.ReactNode;
    prevArrow?: React.ReactNode;
    children?: React.ReactNode
}

export default function Carousel({children,images, navButtons, width,height, autoPlay, activeDotColor, inactiveDotColor, dotHeight, dotWidth, dotRadius, dots, nextArrow, prevArrow} : Images) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 👉 drag state
  const startX = useRef(0);
  const isDragging = useRef(false);
  const startAutoSlide = () => {
    if (!autoPlay) return;
    stopAutoSlide(); // clear first to avoid duplicates

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // 👉 Start on mount
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);


  // 👉 Manual controls
  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
    startAutoSlide(); // reset timer
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide(); // reset timer
  };

  const handleStart = (clientX: number) => {
    startX.current = clientX;
    isDragging.current = true;
    stopAutoSlide(); // pause while dragging
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging.current) return;

    const diff = clientX - startX.current;

    // threshold (you can tweak)
    if (diff > 50) {
      prev();
    } else if (diff < -50) {
      next();
    }

    isDragging.current = false;
    startAutoSlide(); // resume
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden" style={{maxWidth :width || "1920px", maxHeight: height || "auto"}}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
        onMouseLeave={(e) => handleEnd(e.clientX)}
        // 👉 Touch
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) =>
          handleEnd(e.changedTouches[0].clientX)
        }
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full flex-shrink-0 object-cover select-none"
            draggable={false}
          />
        ))}
      </div>
        {}
      {/* Prev Button */}
      <button
        onClick={prev}
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded ${navButtons ? "" : "hidden"}`}
      >
        {prevArrow ?? "Prev"}
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded ${navButtons ? "" : "hidden"}`}
      >
        {nextArrow ?? "Next"}
      </button>
        {dots && <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "10px" }}>
        {images.map((_, i) => (
            <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
                width: (dotWidth ?? 10) + "px",
                height: (dotHeight ?? 10) + "px",
                borderRadius: (dotRadius ?? 50) + "px",
                background: i === index ? (activeDotColor || "#000") : (inactiveDotColor || "#ccc"),
                cursor: "pointer",
                transition: "0.3s"
            }}
            />
        ))}
        </div> }
      {children}
    </div>
  );
}
