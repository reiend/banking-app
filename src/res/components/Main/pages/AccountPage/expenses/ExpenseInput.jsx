import { Input }                                  from "res/global/components";
import { AccountOption, ExpenseInputName }        from "res/global/constants";
import { ExpenseInfo }                            from "res/global/constants";
import { ResetValue, ButtonType, EditingChoices } from "res/global/constants";
import { CurrencyUtils }                          from "res/global/utils";
import { ExpenseButton }                          from "./ExpenseButton";
import { Flex, chakra }                           from "@chakra-ui/react";

import { useAccountContext }  from "res/context/AccountContext";
import { useExpensesContext } from "res/context/ExpensesContext";

export const ExpenseInput = () => {
  const {EXPENSE_NAME, EXPENSE_VALUE} = ExpenseInputName;
  const {ADD, SAVE, CANCEL}           = ButtonType;

  const {expenseInputRef, useExpenseItem}  = useExpensesContext();
  const {account, setAccount}              = useAccountContext();
  const {expenseItem, setExpenseItem}      = useExpenseItem;
  const {expenseNameRef, expenseValueRef}  = expenseInputRef;
  const {isEditing}                        = expenseItem;

  const doExpense = (event) => {
    const {ExpensesOption}                    = AccountOption;
    const {ADD_EXPENSE, EDIT_EXPENSE}         = ExpensesOption;
    const {CANCEL_EDIT_EXPENSE: CANCEL_EDIT}  = ExpensesOption;
    const {RESET_STRING_VALUE}                = ResetValue;
    const {isInvalidCurrency, currencyFormat} = CurrencyUtils;

    const expenseNameObject  = expenseNameRef.current;
    const expenseValueObject = expenseValueRef.current;
    const value              = expenseValueObject.value;
    const expenseName        = expenseNameObject.value;
    const expenseValue       = currencyFormat(value);

    if(isInvalidCurrency(expenseValue)) {
      expenseValueObject.value = RESET_STRING_VALUE;
    }

    const editedExpense     = expenseItem.id;
    const expense           = {[expenseName]: expenseValue};
    const setExpensesParams = {expense, expenseValue, id: editedExpense};
    const DO                = event.target.name;
    
    // Expense operation
    const add            = {...setExpensesParams, type: ADD_EXPENSE};
    const edit           = {...setExpensesParams, type: EDIT_EXPENSE};

    const cancelEdit         = () => setExpenseItem({type: CANCEL_EDIT});
    const setAddExpense      = () => setAccount({...add});
    const setEditExpense     = () => setAccount({...edit}); cancelEdit();
    const updateTotalExpense = () => {
      const totalExpenses = account
      .expenses
        .map((expense) => Object.values(expense)[ExpenseInfo.EXPENSE_VALUE])
        .reduce((totalExpenses, nextExpense) => totalExpenses + nextExpense);
      setAccount({type: "EDIT_TOTAL_EXPENSE", totalExpenses});
    };

    // Expense options
    switch(DO) {
      case ADD:     
        setAddExpense();  
        break;
      case SAVE:    
        setEditExpense(); 
        updateTotalExpense(); 
        break;
      case CANCEL:  
        cancelEdit();     
        break;
      default:      
        break;
    }

    // Reset input
    expenseNameObject.value  = RESET_STRING_VALUE;
    expenseValueObject.value = RESET_STRING_VALUE;
  };

  const onClickExpenseDo  = (event) => doExpense(event);
  const doButton          = (name) => {
    if(name === "cancel") {
        return ({
          name, 
          onClick: onClickExpenseDo, 
          colorScheme: "red", 
          variant: "ghost"
        });
    }
    else if(name === "save") {
        return ({
          name, 
          onClick: onClickExpenseDo, 
          colorScheme: "secondary", 
          variant: "solid"
        });
    }
    else if(name === "add") {
        return ({
          name, 
          onClick: onClickExpenseDo, 
          w: "100%",
        });
    }
    return ({name, onClick: onClickExpenseDo});
  };

  return(
    <div>
      {!isEditing 
        && <chakra.h4
            my="1rem"
            fontWeight="600"
            fontSize="fluid-400"
           >List new Expense</chakra.h4>}
      {isEditing 
          && <chakra.h4
            my="1rem"
            fontSize="fluid-400"
            fontWeight="600"
             >Editing Expense</chakra.h4>}
      <Flex 
        flexWrap="wrap"
      >
        <chakra.div
          flexBasis={{base: "100%", md: "50%"}}
        >
          <label htmlFor={EXPENSE_NAME}>Expense: </label>
          <Input name={EXPENSE_NAME} ref={expenseNameRef}/>   
        </chakra.div>

        <chakra.div
          flexBasis={{base: "100%", md: "50%"}}
        >
          <label htmlFor={EXPENSE_VALUE}>Value: </label>
          <Input name={EXPENSE_VALUE} ref={expenseValueRef}/>
        </chakra.div>
      </Flex>
      
      <Flex
        justifyContent="space-between"
        w="50%"
        m="1rem auto"    
        
      >
        {!isEditing && <ExpenseButton {...doButton(ADD)}/>}
        {isEditing  && <ExpenseButton {...doButton(SAVE)}/>}
        {isEditing  && <ExpenseButton {...doButton(CANCEL)}/>}
      </Flex>   
    </div>
  );
};
    
