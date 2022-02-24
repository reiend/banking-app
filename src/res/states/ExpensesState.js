import { useState } from "react";

export const useExpenses = (isEditingExpense = false) => {
  const [isEditing, setIsEditing] = useState(isEditingExpense);
  return [isEditing, setIsEditing];
};
