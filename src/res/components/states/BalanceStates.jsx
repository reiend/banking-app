import { useState, useContext, createContext, } from "react";

export const BalanceContext = createContext(null);
export const useBalanceContext = (context) => useContext(context);

export const useBalance = (initialBalance) => {
  const [balance, setBalance] = useState(initialBalance);
  return [balance, setBalance];
};

