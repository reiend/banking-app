import { PropTypes }  from "res/proptypes/proptypes";

import { createContext, useContext } from "react";

export const ExpensesContext    = createContext(null);
export const useExpensesContext = () => useContext(ExpensesContext);

const {ExpensesContextPropTypes}    = PropTypes;
ExpensesContext.Provider.propTypes  = {...ExpensesContextPropTypes};

