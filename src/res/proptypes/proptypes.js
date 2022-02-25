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
  chilren: Proptype.array,
  value:   Proptype.object,
};

const ExpenseItemPropTypes = {
  name:  Proptype.string,
  value: Proptype.number,
  id:    Proptype.number,
};

const ExpenseButtonPropTypes = {
  title:   Proptype.string,
  onClick: Proptype.func,
};

const ButtonTypePropTypes = {
  title:   Proptype.string,
  onClick: Proptype.func,
};

const InputPropTypes = {
  name: Proptype.string,
};

export const PropTypes = {
  AccountContextProptypes,
  TransactionProptypes,
  TransactionInputProptypes,
  ExpensesContextPropTypes,
  ExpenseItemPropTypes,
  ExpenseButtonPropTypes,
  ButtonTypePropTypes,
  InputPropTypes,
};

