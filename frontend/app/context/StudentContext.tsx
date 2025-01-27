'use client'
import React, { createContext, useContext, useState } from 'react';
import { ethers } from 'ethers';

interface StateType {
  provider: ethers.BrowserProvider | null;
  signer: any | null;
  contract: ethers.Contract | null;
}
interface StudentContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  userAddress: string | null;
  setUserAddress: React.Dispatch<React.SetStateAction<string | null>>;
  currentState: StateType;
  setCurrentState:React.Dispatch<React.SetStateAction<StateType>>;
}
export const StudentContext = createContext<StudentContextType|undefined>(undefined);

export const StudentProvider:React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  const [currentState, setCurrentState] = useState<StateType>({
    provider: null,
    signer: null,
    contract: null,
  });
  const [theme, setTheme] = useState<'light'|'dark'>('dark');  
  const [userAddress, setUserAddress] = useState<string | null>(null);
  
 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <StudentContext.Provider value={{ theme, toggleTheme,userAddress,setUserAddress,currentState,setCurrentState }}>
      {children}
    </StudentContext.Provider>
  );
};


// export const useStudentContext = () => useContext(StudentContext);