import { PropTypes }                 from "../proptypes/proptypes";
import { createContext, useContext } from "react";

export const AccountContext       = createContext(null);
export const useAccountContext    = () => useContext(AccountContext);

const {AccountContextProptypes}   = PropTypes;
AccountContext.Provider.propTypes = {...AccountContextProptypes};

