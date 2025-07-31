// src/components/ScrollProgress.tsx or MyComponent.tsx
'use client';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScroll(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div>Scroll: {scroll}px</div>;
};

export default ScrollProgress;

