import { Input }                                  from "res/global/components";
import { AccountOption, ExpenseInputName }        from "res/global/constants";
import { ResetValue, ButtonType, EditingChoices } from "res/global/constants";
import { CurrencyUtils }                          from "res/global/utils";

import { useAccountContext }  from "res/context/AccountContext";
import { useExpensesContext } from "res/context/ExpensesContext";

const doExpense = (event, doExpenseParams) => {
    const {ExpensesOption}                                 = AccountOption;
    const {ADD_EXPENSE, EDIT_EXPENSE, CANCEL_EDIT_EXPENSE} = ExpensesOption;
    const {RESET_STRING_VALUE}                             = ResetValue;
    const {ADD, EDIT, CANCEL}                              = ButtonType;
    const {YES, NO}                                        = EditingChoices;
    const {isInvalidCurrency, currencyFormat}              = CurrencyUtils;

    const {setAccount: setExpenses}         = doExpenseParams;
    const {expenseInputRef}                 = doExpenseParams;
    const {useExpenseEdit}                  = doExpenseParams;
    const {expenseNameRef, expenseValueRef} = expenseInputRef;
    const {setIsEditing}                    = useExpenseEdit;
    const expenseNameObject                 = expenseNameRef.current;
    const expenseValueObject                = expenseValueRef.current;
    const value                             = expenseValueObject.value;
    const expenseName                       = expenseNameObject.value;
    const expenseValue                      = currencyFormat(value);

    if(isInvalidCurrency(expenseValue)) {
      expenseValueObject.value = RESET_STRING_VALUE;
    }

    const expense           = {[expenseName]: expenseValue};
    const setExpensesParams = {expense, expenseValue};
    const DO                = event.target.name;

    // Expense operation
    const addExpense    = {...setExpensesParams, type: ADD_EXPENSE};
    const editExpense   = {...setExpensesParams, type: EDIT_EXPENSE};
    const cancelExpense = {...setExpensesParams, type: CANCEL_EDIT_EXPENSE};

    // Expense options
    switch(DO) {
      case ADD:     setExpenses({...addExpense}); break;
      case EDIT:    setExpenses({...editExpense}); setIsEditing(NO); break;
      case CANCEL:  setExpenses({...cancelExpense}); setIsEditing(YES); break;
      default:      break;
    }

    // Reset input
    expenseNameObject.value  = RESET_STRING_VALUE;
    expenseValueObject.value = RESET_STRING_VALUE;
};

export const ExpenseInput = () => {
  const {EXPENSE_NAME, EXPENSE_VALUE} = ExpenseInputName;
  const {ADD, EDIT, CANCEL}           = ButtonType;

  const {expenseInputRef, useExpenseEdit} = useExpensesContext();
  const {account, setAccount}             = useAccountContext();
  const {isEditing}                       = useExpenseEdit;
  const {expenseNameRef, expenseValueRef} = expenseInputRef;
  const forAccount                        = {account, setAccount};
  const forExpense                        = {expenseInputRef, useExpenseEdit};
  const doExpenseParams                   = {...forAccount, ...forExpense};

  const onClickExpenseDo  = (event) => doExpense(event, doExpenseParams);
  const doButton          = (name) => ({name, onClick: onClickExpenseDo});
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
      {isEditing  || <button {...doButton(ADD)}>{ADD}</button>}
      {!isEditing || <button {...doButton(EDIT)}>{EDIT}</button>}
      {!isEditing || <button {...doButton(CANCEL)}>{CANCEL}</button>}
    </div>
  );
};
    
