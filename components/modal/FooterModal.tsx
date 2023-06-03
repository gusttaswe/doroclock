'use client';

import { X } from "lucide-react";
import React from "react";

type FooterModalProps = {
  onClose(): void;
  children: React.ReactNode
};

export const FooterModal = ({
  children,
  onClose,
}: FooterModalProps) => {

  
  const Header = () => (
    <div className="flex items-center p-4">
      <span className="mx-auto font-semibold text-black">Clock Configurations</span>
      <button 
        onClick={onClose} 
        className=""
        >
        <X color="#000"/>
      </button>
    </div>
  )

  const Main = () => (
    <div className="flex flex-1 items-center p-4">
      {children}
    </div>
  )


  return (
    <div 
      className="
        flex flex-col flex-shrink-0 
        z-10 relative 
        rounded-tl-3xl rounded-tr-3xl
        bg-slate-50 
      "
    >
      <Header />
      <Main />
    </div>
  )
}