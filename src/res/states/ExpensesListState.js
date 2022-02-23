import { useState } from "react";

export const useExpensesList = (list = null) => {
  const [expensesList, setExpensesList] = useState(list);
  return [expensesList, setExpensesList];
};

