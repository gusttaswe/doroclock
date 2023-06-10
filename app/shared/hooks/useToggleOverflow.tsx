
import { useEffect } from "react";

export function useToggleOverflow() {

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])
}