import { useEffect } from 'react';

export function useWindowListener<T extends keyof WindowEventMap>(
  eventType: T, 
  listener: (event: WindowEventMap[T]) => void, 
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.addEventListener(eventType, listener as EventListener, options);
    
    return () => {
      window.removeEventListener(eventType, listener as EventListener);
    };
  }, [eventType, listener, options]);
}