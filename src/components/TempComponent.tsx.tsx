// components/MyComponent.tsx
'use client'; // 👈 very important in App Router to run on client

import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <div>Window width: {width}</div>;
};

export default MyComponent;
