'use client'
import { FooterModal } from "@/app/components/modal"
import { ChevronUp } from "lucide-react"
import { useState } from "react"
import { createPortal } from "react-dom"

type HomeFooterProps = {

}

export const HomeFooter = ({

}: HomeFooterProps) => {
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);

  return (
    <>
      {
        !isConfigOpen && (
          <footer className='flex-shrink-0 z-10 relative h-20 flex items-center justify-center'>
            <button  onClick={() => setIsConfigOpen(true)}>
              <ChevronUp size={40} color={"#fff"}/>
            </button>
          </footer>
        )
      }

      { isConfigOpen && createPortal(
        <FooterModal
          onClose={() => setIsConfigOpen(false)}
        />,
        document.body
      )}
    </>
  )
}