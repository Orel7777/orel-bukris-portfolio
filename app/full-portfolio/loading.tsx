import dynamic from 'next/dynamic';
import React from 'react';

// טעינה דינמית של קומפוננטת ה-Loader כדי למנוע בעיות עם framer-motion
const Loader = dynamic(() => import('@/components/ui/Loader'), { ssr: false });

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
} 