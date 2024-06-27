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
import { InspectionService } from "../inspection.service";
import { InspectionCreateInput } from "./InspectionCreateInput";
import { Inspection } from "./Inspection";
import { InspectionFindManyArgs } from "./InspectionFindManyArgs";
import { InspectionWhereUniqueInput } from "./InspectionWhereUniqueInput";
import { InspectionUpdateInput } from "./InspectionUpdateInput";

export class InspectionControllerBase {
  constructor(protected readonly service: InspectionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Inspection })
  async createInspection(
    @common.Body() data: InspectionCreateInput
  ): Promise<Inspection> {
    return await this.service.createInspection({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Inspection] })
  @ApiNestedQuery(InspectionFindManyArgs)
  async inspections(@common.Req() request: Request): Promise<Inspection[]> {
    const args = plainToClass(InspectionFindManyArgs, request.query);
    return this.service.inspections({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Inspection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async inspection(
    @common.Param() params: InspectionWhereUniqueInput
  ): Promise<Inspection | null> {
    const result = await this.service.inspection({
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
  @swagger.ApiOkResponse({ type: Inspection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInspection(
    @common.Param() params: InspectionWhereUniqueInput,
    @common.Body() data: InspectionUpdateInput
  ): Promise<Inspection | null> {
    try {
      return await this.service.updateInspection({
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
  @swagger.ApiOkResponse({ type: Inspection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInspection(
    @common.Param() params: InspectionWhereUniqueInput
  ): Promise<Inspection | null> {
    try {
      return await this.service.deleteInspection({
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
