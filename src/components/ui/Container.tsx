import React from 'react';

export function Container({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full ${className}`}>
      {children}
    </div>
  );
}
