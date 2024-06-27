import * as graphql from "@nestjs/graphql";
import { ExpenseResolverBase } from "./base/expense.resolver.base";
import { Expense } from "./base/Expense";
import { ExpenseService } from "./expense.service";

@graphql.Resolver(() => Expense)
export class ExpenseResolver extends ExpenseResolverBase {
  constructor(protected readonly service: ExpenseService) {
    super(service);
  }
}
