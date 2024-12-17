"use client";

import dynamic from 'next/dynamic';

const MainText = dynamic(() => import('@/components/shared/mainText/mainText'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <h1 className='hidden'>MICROTEK</h1>
      <h2
        className='text-[6rem] text-regal_yellow font-[700] font-tektur py-[2rem]'
      >
        ДЕРЖАВНЕ ПІДПРИЄМСТВО
      </h2>
      <div className="w-full h-[20rem]">
        <MainText />
      </div>
      <h3
        className='text-[6rem] text-regal_yellow font-[700] font-tektur py-[2rem]'
      >
        БАЗОВИЙ ЦЕНТР КРИТИЧНИХ ТЕХНОЛОГІЙ
      </h3>
    </>
  );
}
