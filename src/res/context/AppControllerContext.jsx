import Proptype from "prop-types";

import { createContext, useContext } from "react";

export const AppControllerContext    = createContext(null);
export const useAppControllerContext = () => useContext(AppControllerContext);

AppControllerContext.Provider.propTypes = {
  value: Proptype.object,
};
