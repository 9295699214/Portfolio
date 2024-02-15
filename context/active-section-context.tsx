"use client"

import { SectionName } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react'




export type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}


type ActivSectionContextType={
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number;
    setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActivSectionContextType | null>(null)

export default function ActiveSectionContextProvider(
    { children}: ActiveSectionContextProviderProps ) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick]= useState(0);
  return <ActiveSectionContext.Provider 
            value={{
                activeSection, 
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick
            }}>{children}
            </ActiveSectionContext.Provider>
}



export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext)
    if (context == null){
        throw new Error(
            "useActivationSectionCOntext must be within a ActiveSectionContextProvider"
        )
    }
    return context;
}