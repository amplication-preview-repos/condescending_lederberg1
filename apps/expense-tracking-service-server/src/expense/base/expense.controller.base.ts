/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ExpenseService } from "../expense.service";
import { ExpenseCreateInput } from "./ExpenseCreateInput";
import { Expense } from "./Expense";
import { ExpenseFindManyArgs } from "./ExpenseFindManyArgs";
import { ExpenseWhereUniqueInput } from "./ExpenseWhereUniqueInput";
import { ExpenseUpdateInput } from "./ExpenseUpdateInput";

export class ExpenseControllerBase {
  constructor(protected readonly service: ExpenseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Expense })
  async createExpense(
    @common.Body() data: ExpenseCreateInput
  ): Promise<Expense> {
    return await this.service.createExpense({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Expense] })
  @ApiNestedQuery(ExpenseFindManyArgs)
  async expenses(@common.Req() request: Request): Promise<Expense[]> {
    const args = plainToClass(ExpenseFindManyArgs, request.query);
    return this.service.expenses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Expense })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async expense(
    @common.Param() params: ExpenseWhereUniqueInput
  ): Promise<Expense | null> {
    const result = await this.service.expense({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Expense })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateExpense(
    @common.Param() params: ExpenseWhereUniqueInput,
    @common.Body() data: ExpenseUpdateInput
  ): Promise<Expense | null> {
    try {
      return await this.service.updateExpense({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Expense })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteExpense(
    @common.Param() params: ExpenseWhereUniqueInput
  ): Promise<Expense | null> {
    try {
      return await this.service.deleteExpense({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
