'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "New Collection 2025",
    subtitle: "Discover the latest fashion trends",
    image: "/image/Product-1.jpg",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Summer Essentials",
    subtitle: "Fresh styles for the season",
    image: "/image/Product-1.jpg",
    cta: "Explore"
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "Crafted with attention to detail",
    image: "/image/Product-1.jpg",
    cta: "View Collection"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from 1 instead of 0
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const mouseStartX = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Create extended slides array with clones for infinite loop
  const extendedSlides = [
    slides[slides.length - 1], // Clone last slide at beginning
    ...slides,
    slides[0] // Clone first slide at end
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= slides.length) {
          // Reset to first slide (index 1 in extended array)
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentSlide(1);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 700);
          return prev + 1;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle transition end to reset position for infinite loop
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlide === 0) {
        setIsTransitioning(false);
        setCurrentSlide(slides.length);
        setTimeout(() => setIsTransitioning(true), 50);
      } else if (currentSlide === slides.length + 1) {
        setIsTransitioning(false);
        setCurrentSlide(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('transitionend', handleTransitionEnd);
      return () => carousel.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index + 1); // Adjust for extended array
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    if (currentSlide <= 1) {
      setCurrentSlide(slides.length);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    touchEndX.current = e.touches[0].clientX;
    const difference = touchStartX.current - touchEndX.current;
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    
    // Calculate drag offset as percentage
    let offsetPercentage = (difference / containerWidth) * 100;
    
    // Apply resistance when trying to drag beyond one slide
    if (Math.abs(offsetPercentage) > 100) {
      const excess = Math.abs(offsetPercentage) - 100;
      const resistance = Math.max(0, 100 - excess * 0.3); // Apply resistance
      offsetPercentage = offsetPercentage > 0 ? resistance : -resistance;
    }
    
    // Limit the maximum offset
    offsetPercentage = Math.max(-150, Math.min(150, offsetPercentage));
    
    setDragOffset(offsetPercentage);
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === 0 || touchEndX.current === 0) return;
    
    const difference = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const swipeThreshold = containerWidth * 0.15; // Reduced from 0.2 to 0.15 (15% of container width)

    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(difference) > minSwipeDistance || Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
    
    // Resume auto-playing after a delay
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Mouse handlers for desktop drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    setIsDragging(true);
    setIsAutoPlaying(false);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const difference = mouseStartX.current - e.clientX;
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    
    // Calculate drag offset as percentage
    let offsetPercentage = (difference / containerWidth) * 100;
    
    // Apply resistance when trying to drag beyond one slide
    if (Math.abs(offsetPercentage) > 100) {
      const excess = Math.abs(offsetPercentage) - 100;
      const resistance = Math.max(0, 100 - excess * 0.3); // Apply resistance
      offsetPercentage = offsetPercentage > 0 ? resistance : -resistance;
    }
    
    // Limit the maximum offset
    offsetPercentage = Math.max(-150, Math.min(150, offsetPercentage));
    
    setDragOffset(offsetPercentage);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const difference = mouseStartX.current - e.clientX;
    const minSwipeDistance = 50;
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const swipeThreshold = containerWidth * 0.15; // Reduced from 0.2 to 0.15

    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(difference) > minSwipeDistance || Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    mouseStartX.current = 0;
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  return (
    <div 
      ref={carouselRef}
      className="relative h-screen w-full overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div 
        className={`flex h-full w-full ${
          isDragging || !isTransitioning ? 'transition-none' : 'transition-transform duration-700 ease-in-out'
        }`}
        style={{ 
          transform: `translateX(-${currentSlide * 100 + (isDragging ? dragOffset : 0)}%)` 
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={`${slide.id}-${index}`}
            className="min-w-full h-full relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/30 to-black/60">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
                  {slide.subtitle}
                </p>
                <button className="bg-white hover:bg-neutral-100 text-black font-semibold py-4 px-8 rounded-sm transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === (currentSlide - 1) % slides.length
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
