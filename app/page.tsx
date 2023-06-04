'use client';

import { Clock } from '@/app/components/clock';
import {
  HomeFooter
} from '@/app/components/home/footer';

export default function Home() {
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
