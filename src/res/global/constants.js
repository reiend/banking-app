export const AccountOption = {
  EDIT_ACCOUNT: "EDIT_ACCOUNT",
  TransactionOption: {
    WITHDRAW: "WITHDRAW",
    DEPOSIT:  "DEPOSIT",
  },
  ExpensesOption: {
    ADD_EXPENSE:          "ADD_EXPENSE",
    DELETE_EXPENSE:       "DELETE_EXPENSE",
    EDIT_EXPENSE:         "EDIT_EXPENSE",
    PAY_EXPENSE:          "PAY_EXPENSE",
    CANCEL_EDIT_EXPENSE:  "CANCEL_EDIT_EXPENSE",
    UPDATE_TOTAL_EXPENSE: "UPDATE_TOTAL_EXPENSE",
    EDIT_TOTAL_EXPENSE:  "EDIT_TOTAL_EXPENSE",
    SET_ID:               "SET_ID",
  },
};

export const ExpenseInputName = {
  EXPENSE_NAME:  "expenseName",
  EXPENSE_VALUE: "expenseValue",
};

export const ErrorMessage = {
  ACCOUNT_OPTION_MESSAGE_ERROR: "Invalid Account option",
  INPUT_CURRENCY_ERROR_MESSAGE: "Invalid Input currency",
};

export const ResetValue = {
  RESET_STRING_VALUE:  "",
  RESET_NUMBER_VALUE:  0,
  RESET_BOOLEAN_VALUE: false,
};

export const SignificantValue = {
  ONE: 10,
  TWO: 100,
};

export const Quantity = {
  ONE:   1,
  TWO:   2,
  THREE: 3,
};

export const ButtonType = {
  ADD:    "add",
  SAVE:   "save",
  CANCEL: "cancel",
  ExpenseButtonType: {
    PAY:    "pay",
    EDIT:   "edit",
    DELETE: "X",
  },
};

export const EditingChoices = {
  YES: true,
  NO:  false,
};

export const ExpenseInfo = {
  EXPENSE_VALUE: 0,
};

export const ExpensesListInfo = {
  ZERO: 0,
};

const EMPTY_REF    = null;
const FIRST_LETTER = 0;
const MAX          = 10e7;

export {EMPTY_REF, FIRST_LETTER, MAX};
