'use client';

import Image from 'next/image'
import { useContext } from 'react';
import { ThemeContext } from '@/app/components/providers/theme';
import { HomeHeader, HomeContent } from './components/home';

export default function Home() {
  const theme = useContext(ThemeContext);
  
  return (
    <>
      <HomeHeader />
      <HomeContent />
      { theme.background ? (
        <Image
          src={theme.background} 
          alt="my gif" 
          height={500}
          width={500}
          className='w-screen h-screen absolute top-0 left-0 z-0 object-cover'
          data-testid='background-image'
        />
      ) : (
        <div className='w-screen h-screen absolute top-0 left-0 bg-slate-800 z-0'></div>
      )}
    </>
  )
}
