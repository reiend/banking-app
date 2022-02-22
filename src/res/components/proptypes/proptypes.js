import Proptype from "prop-types";

const TransactionProptypes = {
  WITHDRAW: Proptype.string,
  DEPOSIT:  Proptype.string,
};

const TransactionInputProptypes = {transaction: Proptype.string};

export const PropTypes = {
  TransactionProptypes,
  TransactionInputProptypes,
};

