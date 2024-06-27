import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
