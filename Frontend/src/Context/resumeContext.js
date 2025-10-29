import { createContext, useContext } from "react";

export const ResumeContext = createContext(null)

export const useResumeData = () => useContext(ResumeContext)