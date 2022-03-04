import { createContext, useContext } from "react";

export const AppControllerContext    = createContext(null);
export const useAppControllerContext = () => useContext(AppControllerContext);

