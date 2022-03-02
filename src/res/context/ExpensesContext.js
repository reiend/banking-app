import Proptype from "prop-types";

import { createContext, useContext } from "react";

export const ExpensesContext    = createContext(null);
export const useExpensesContext = () => useContext(ExpensesContext);

ExpensesContext.Provider.propTypes = {
  chilren: Proptype.array,
  value:   Proptype.object,
};
