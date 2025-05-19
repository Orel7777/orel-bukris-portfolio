'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // ודא שאנחנו בצד הלקוח
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // בדיקה אם זה קובץ SVG גדול
  const isSVG = src.endsWith('.svg');
  const shouldLazyLoad = isSVG && !priority;

  // אם לא נטען בצד הלקוח, הצג פלייסהולדר
  if (!isMounted) {
    return (
      <div 
        style={{ width: `${width}px`, height: `${height}px` }}
        className={`bg-gray-800 animate-pulse ${className}`} 
      />
    );
  }

  return (
    <div className="relative">
      {!isLoaded && shouldLazyLoad && (
        <div 
          className={`bg-gray-800 animate-pulse absolute inset-0 ${className}`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        loading={shouldLazyLoad ? 'lazy' : 'eager'}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
} 