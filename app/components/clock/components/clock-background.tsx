import { useContext } from 'react';

import Image from 'next/image';
import { ThemeContext } from '@/app/components/providers/theme';
import { ImageIcon } from 'lucide-react'
type ClockBackground = {
  updateBackground(fileUrl: string): void;
}

export function ClockBackground({
  updateBackground
}: ClockBackground) {
  const { background } = useContext(ThemeContext);
  
  const uploadFile = (file: File) => {
    const url = URL.createObjectURL(file);
    updateBackground(url)
  }

  return (
    <div className="flex items-center" data-testid='clock-background'>
      <div>
        <label 
          htmlFor="fileInput" 
          className="relative text-white"
        >
          {
            background ? (
              <Image 
                src={background}
                width={100}
                height={100}
                alt=''
                className='rounded-full h-8 w-8 object-cover border-[2px] shadow-2xl'
                data-testid='clock-background-preview'
              />
            ) : (
              <div className='grid place-items-center rounded-full h-8 w-8 border-[2px] shadow-lg'>
                <ImageIcon size={10}/>
              </div>
            )
          }
        </label>
        <input
          id="fileInput"
          data-testid='clock-background-input'
          type="file"
          className="absolute inset-0 hidden z-[-1]"
          onChange={(e) => uploadFile(e.target.files![0])}
        />
      </div>
    </div>
  )
}