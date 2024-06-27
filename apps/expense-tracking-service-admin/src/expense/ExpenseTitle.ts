import { Expense as TExpense } from "../api/expense/Expense";

export const EXPENSE_TITLE_FIELD = "id";

export const ExpenseTitle = (record: TExpense): string => {
  return record.id?.toString() || String(record.id);
};
