import React from 'react';

interface ImagePlaceholderProps {
  text: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'widescreen' | 'auto';
}

export function ImagePlaceholder({ text, className = '', aspectRatio = 'auto' }: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[4/5]',
    widescreen: 'aspect-[21/9]',
    auto: 'h-full w-full'
  };

  return (
    <div
      className={`bg-purple-100/50 border border-purple-200/50 flex flex-col items-center justify-center text-purple-400 overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
      <span className="text-sm font-semibold tracking-wider uppercase text-center px-4 opacity-70">
        {text}
      </span>
    </div>
  );
}
