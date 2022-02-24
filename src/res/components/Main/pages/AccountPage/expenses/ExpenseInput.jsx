import { Input }                           from "res/global/components";
import { AccountOption, ExpenseInputName } from "res/global/constants";
import { ResetValue, ButtonType }          from "res/global/constants";
import { CurrencyUtils }                   from "res/global/utils";
import { useAccountContext }               from "res/context/AccountContext";
import { useRef }                          from "react";

const doExpenseAdd = (event, addExpenseParams) => {
    const {ExpensesOption}                     = AccountOption;
    const {ADD_EXPENSE}                        = ExpensesOption;
    const {RESET_STRING_VALUE}                 = ResetValue;
    const {isInvalidCurrency, currencyFormat}  = CurrencyUtils;

    const {setAccount: setExpenses}         = addExpenseParams;
    const {expenseInputRefs}                = addExpenseParams;
    const {expenseNameRef, expenseValueRef} = expenseInputRefs;
    const expenseNameObject                 = expenseNameRef.current;
    const expenseValueObject                = expenseValueRef.current;
    const value                             = expenseValueObject.value;
    const expenseName                       = expenseNameObject.value;
    const expenseValue                      = currencyFormat(value);

    if(isInvalidCurrency(expenseValue)) {
      expenseValueObject.value = RESET_STRING_VALUE;
    }

    const expense           = {[expenseName]: expenseValue};
    const setExpensesParams = {type: ADD_EXPENSE, expense, expenseValue};

    setExpenses({...setExpensesParams}); 

    // Reset form
    expenseNameObject.value  = RESET_STRING_VALUE;
    expenseValueObject.value = RESET_STRING_VALUE;
};

export const ExpenseInput = () => {
  const {EXPENSE_NAME, EXPENSE_VALUE} = ExpenseInputName;

  const {account, setAccount} = useAccountContext();
  const expenseNameRef        = useRef(null);
  const expenseValueRef       = useRef(null);
  const expenseInputRefs      = {expenseNameRef, expenseValueRef};
  const addExpenseParams      = {setAccount, expenseInputRefs}

  const onClickAddExpense = (event) => doExpenseAdd(event, addExpenseParams);

  return(
    <div>
      <h4>List new Expense</h4>
        <div>
          <label htmlFor={EXPENSE_NAME}>Expense: </label>
          <Input name={EXPENSE_NAME} ref={expenseNameRef}/>   
        </div>
        <div>
          <label htmlFor={EXPENSE_VALUE}>Value: </label>
          <Input name={EXPENSE_VALUE} ref={expenseValueRef}/>
        </div>
        <button name="add" onClick={onClickAddExpense}>Add</button>
    </div>
  );
};

