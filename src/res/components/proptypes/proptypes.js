import Proptype from "prop-types";

const TransactionInputProptypes = {transaction: Proptype.string};
const TransactionProptypes = {
  WITHDRAW: Proptype.string,
  DEPOSIT:  Proptype.string,
};

const ExpenseItemPropType = {
  name:  Proptype.string,
  value: Proptype.number,
};

export const PropTypes = {
  TransactionProptypes,
  TransactionInputProptypes,

  ExpenseItemPropType,
};


