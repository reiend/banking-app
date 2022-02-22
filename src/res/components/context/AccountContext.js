import { createContext, useContext } from "react";

export const AccountContext    = createContext(null);
export const useAccountContext = () => useContext(AccountContext);

