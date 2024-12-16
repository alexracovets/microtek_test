"use client";

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/shared/scene/scene'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Scene />
    </>
  );
}
