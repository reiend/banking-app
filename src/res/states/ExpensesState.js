import { AccountOption }  from "res/global/constants"; 
import { EditingChoices } from "res/global/constants";    

import { useReducer } from "react";

const expensesReducer = (previousState, attribute) => {
  const {ExpensesOption}                    = AccountOption;
  const {CANCEL_EDIT_EXPENSE, EDIT_EXPENSE} = ExpensesOption;
  const {SET_ID}                            = ExpensesOption;
  const {YES, NO}                           = EditingChoices;

  const {type, id} = attribute;
  
  // Expense operation
  const doCancelEdit = () => ({...previousState, isEditing: NO});
  const doEdit       = () => ({...previousState, isEditing: YES});
  const doSetId      = () => ({...previousState, id});
  
  // Expense options
  switch(type) {
    case SET_ID:               return doSetId();
    case EDIT_EXPENSE:         return doEdit();
    case CANCEL_EDIT_EXPENSE:  return doCancelEdit();
    default:                   return previousState;
  }
};

export const useExpenses = () => {
 const {NO} = EditingChoices;
 return useReducer(expensesReducer, {isEditing: NO});
};
