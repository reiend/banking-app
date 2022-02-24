import Proptype from "prop-types";

const AccountContextProptypes = {
  children: Proptype.array,
  value:    Proptype.object,
};

const TransactionInputProptypes = {transaction: Proptype.string};
const TransactionProptypes = {
  WITHDRAW: Proptype.string,
  DEPOSIT:  Proptype.string,
};

const ExpensesContextPropTypes = {
  chilren:  Proptype.array,
  value:    Proptype.object,
};

const ExpenseItemPropType = {
  name:  Proptype.string,
  value: Proptype.number,
  id:    Proptype.number,
};

export const PropTypes = {
  AccountContextProptypes,
  TransactionProptypes,
  TransactionInputProptypes,
  ExpensesContextPropTypes,
  ExpenseItemPropType,
};


