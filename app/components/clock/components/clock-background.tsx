import { useContext } from 'react';

import Image from 'next/image';
import { ThemeContext } from '@/app/components/providers/theme';

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
          className="
            relative 
            cursor-pointer 
            bg-blue-500 
            text-white 
            py-2 px-4 
            rounded-lg shadow-md 
            hover:bg-blue-600
          "
        >
          Select File
        </label>
        <input
          id="fileInput"
          data-testid='clock-background-input'
          type="file"
          className="absolute inset-0 opacity-0 z-[-1]"
          onChange={(e) => uploadFile(e.target.files![0])}
        />
      </div>
      <div className=''>
        {
          background ? (
            <Image 
              src={background}
              width={100}
              height={100}
              alt=''
              className='rounded-full h-20 w-20 object-cover'
              data-testid='clock-background-preview'
            />
          ) : (
            <div className='rounded-full h-20 w-20 bg-gray-300' />
          )
        }
      </div>
    </div>
  )
}