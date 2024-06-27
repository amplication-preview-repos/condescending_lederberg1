import { Module } from "@nestjs/common";
import { ExpenseModuleBase } from "./base/expense.module.base";
import { ExpenseService } from "./expense.service";
import { ExpenseController } from "./expense.controller";
import { ExpenseResolver } from "./expense.resolver";

@Module({
  imports: [ExpenseModuleBase],
  controllers: [ExpenseController],
  providers: [ExpenseService, ExpenseResolver],
  exports: [ExpenseService],
})
export class ExpenseModule {}
