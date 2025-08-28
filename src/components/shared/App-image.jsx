"use client";

import Image from "next/image";

export default function AppImage({ src, alt, className }) {
  return (
    <div className={`w-full relative ${className}`}>
      <Image
        src={
          src ||
          "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
        }
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
