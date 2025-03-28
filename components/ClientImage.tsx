"use client";

import { useState } from "react";
import Image from "next/image";

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function ClientImage({
  src,
  alt,
  className = "",
  fill = false,
  priority = false,
  width,
  height,
}: ClientImageProps) {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  if (isError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={
          !fill && width && height
            ? { width: `${width}px`, height: `${height}px` }
            : {}
        }
      >
        <span className="text-gray-500">Imagem não disponível</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      priority={priority}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      onError={handleError}
    />
  );
}
