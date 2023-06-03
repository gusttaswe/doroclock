'use client';
import { useState } from 'react';

import { Clock } from '@/components/clock';
import {
  HomeFooter
} from '@/components/home/footer';


export default function Home() {
  const [file, setFile] = useState<any>();

  const uploadFile = (e: any) => {
    const [file] = e.target.files
    const url = URL.createObjectURL(file)
    setFile(url)
  }

  
  const Header = () => {
    return (
      <header className='bg-slate-800'>
        header
      </header>
      )
  }

  const Main = () => {

    return (
      <main className='flex-grow flex items-center justify-center'>
        <Clock />
      </main>
    )
  }

  return (
    <>
      <Header />
      <Main />
      <HomeFooter />
    </>
  )
}
