'use client';

import { X } from "lucide-react";

type FooterModalProps = {
  onClose(): void;
  saveChanges(): void;
};

export const FooterModal = ({
  onClose,
  saveChanges
}: FooterModalProps) => {

  
  const Header = () => (
    <div className="flex items-center p-4">
      <span className="mx-auto font-semibold text-white">Clock Configurations</span>
      <button 
        onClick={onClose} 
        className=""
        >
        <X color="#fff"/>
      </button>
    </div>
  )

  const Main = () => (
    <div className="flex flex-1 items-center p-4">
      
    </div>
  )


  return (
    <div 
      className="
        h-72
        flex flex-col flex-shrink-0 
        z-10 relative 
        rounded-tl-3xl rounded-tr-3xl
        bg-slate-500 
      "
    >
      <Header />
      <Main />
      <button className="flex-shrink-0 mb-4 text-white border p-3 rounded-md block mx-auto" onClick={saveChanges}>Save Changes</button>
    </div>
  )
}