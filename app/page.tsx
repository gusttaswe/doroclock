'use client';

import { Clock } from '@/components/clock';
import { ChevronRight } from 'lucide-react'
import Image from 'next/image';

import giffTest from '@/public/1.gif'
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<any>();

  const uploadFile = (e: any) => {
    const [file] = e.target.files
    console.log('file', file);
    const url = URL.createObjectURL(file)
    setFile(url)
  }

  return (
    <>
      <main className="w-screen h-screen flex z-10 relative">
        <div className='flex flex-1 items-center justify-center'>
          <Clock/>
        </div>
        <aside className='w-96 bg-slate-200 m-4 rounded-3xl shadow-2xl p-8'>
          <header className='flex items-center'>
            <span className='mx-auto font-semibold text-zinc-700'>Configure your Clock</span>
            <ChevronRight 
              size={34} 
              color='#888'
            />
          </header>
          <div className='flex flex-col items-center mt-10 gap-10'>
            <span>Options</span>
            <span>Options</span>
            <span>Options</span>
            <span>Options</span>
            <span>Options</span>
            <input 
              className='bg-slate-400 rounded-lg p-4 text-white' 
              type='file'
              onChange={uploadFile}
            />
          </div>
        </aside>
      </main>
      <Image
        src={file || giffTest} 
        alt="my gif" 
        height={500}
        width={500}
        className='w-screen h-screen absolute top-0 left-0 z-0'
      />
    </>
  )
}
