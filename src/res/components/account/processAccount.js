import { CurrencyUtils }             from "../global/utils";
import { AccountOption, ResetValue } from "../global/constants";
import { Random }                    from "../global/utils";
import { ExpenseItem }               from "../coreutils/ExpensesUtils"

export const ProcessAccount = {
  processTransaction: (inputRef, setTransaction) => {
    const {RESET_STRING_VALUE}                = ResetValue;
    const {currencyFormat, isInvalidCurrency} = CurrencyUtils;

    const TRANSACTION = inputRef.current.name.toUpperCase();
    const inputValue  = currencyFormat(inputRef.current.value);

    if(isInvalidCurrency(inputValue)) {
      inputRef.current.value = RESET_STRING_VALUE;
    }

    // old code
    // const { WITHDRAW, DEPOSIT } = TransactionOption;
    // const { TRANSACTION_ERROR_MESSAGE } = ErrorMessage;
    // switch(TRANSACTION) {
    //   case WITHDRAW: set(balance => balance + inputValue); break;
    //   case DEPOSIT: set(balance => balance - inputValue); break;
    //   default: throw new Error(TRANSACTION_ERROR_MESSAGE);
    // }
    
    // process transaction
    setTransaction({type: TRANSACTION, inputValue});

    // Reset input
    inputRef.current.value = RESET_STRING_VALUE;
  },
  processExpense: (event, setExpenses) => {
    event.preventDefault();
    const {ExpensesOption}                     = AccountOption;
    const {ADD_EXPENSE}                        = ExpensesOption;
    const {RESET_STRING_VALUE}                 = ResetValue;
    const {isInvalidCurrency, currencyFormat}  = CurrencyUtils;

    const expenseNameObject  = event.target.expenseName;
    const expenseValueObject = event.target.expenseValue;
    const expenseName        = expenseNameObject.value;
    const expenseValue       = currencyFormat(expenseValueObject.value);

    if(isInvalidCurrency(expenseValue)) {
      expenseValueObject.value = RESET_STRING_VALUE;
    }

    const expense = {[expenseName]: expenseValue};

    // process adding expense
    setExpenses({type: ADD_EXPENSE, expense, expenseValue});
    
    // Reset form
    expenseNameObject.value  = RESET_STRING_VALUE;
    expenseValueObject.value = RESET_STRING_VALUE;
  },
  processExpensesList: (account, setExpensesList) => {
    return () => setExpensesList(account.expenses.map((expense, i)=> {
      const [name]          = Object.keys(expense);
      const [value]         = Object.values(expense);
      const expenseItemKey  = Random.getKey(name);
      const expenseItemInfo = { name: `${name}`, value: `${value}`, }

      return <ExpenseItem key={expenseItemKey} {...expenseItemInfo} id={i}/>;
    }));
  },
  processExpenseItemDelete: (id, setExpenses) => {
    const {ExpensesOption} = AccountOption;
    const {DELETE_EXPENSE} = ExpensesOption;
    
    // process deleting expense
    setExpenses({type: DELETE_EXPENSE, id})
  },
};

