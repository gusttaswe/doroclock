import { createContext } from "vm";

type ClockProviderProps = {
  children: React.ReactNode;
}

type ClockOptions = {
  color: string;
}

export const ClockContext = createContext();

export const ClockProvider = ({ 
children
}: ClockProviderProps) => {

  const clockOptions: ClockOptions = {
    color: '#red',
  }

  return (
    <ClockContext.Provider value={clockOptions}>
      {children}
    </ClockContext.Provider>
  )
}