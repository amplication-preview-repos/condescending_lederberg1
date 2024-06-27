import { ExpenseWhereInput } from "./ExpenseWhereInput";
import { ExpenseOrderByInput } from "./ExpenseOrderByInput";

export type ExpenseFindManyArgs = {
  where?: ExpenseWhereInput;
  orderBy?: Array<ExpenseOrderByInput>;
  skip?: number;
  take?: number;
};
