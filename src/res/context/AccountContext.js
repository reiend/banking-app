import Proptype from "prop-types";

import { createContext, useContext } from "react";

export const AccountContext       = createContext(null);
export const useAccountContext    = () => useContext(AccountContext);

AccountContext.Provider.propTypes = {
  children: Proptype.array,
  value:    Proptype.object,
};
