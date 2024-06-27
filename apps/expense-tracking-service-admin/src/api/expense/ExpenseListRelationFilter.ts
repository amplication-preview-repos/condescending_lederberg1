import { ExpenseWhereInput } from "./ExpenseWhereInput";

export type ExpenseListRelationFilter = {
  every?: ExpenseWhereInput;
  some?: ExpenseWhereInput;
  none?: ExpenseWhereInput;
};
