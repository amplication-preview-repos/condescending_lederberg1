import { Module } from "@nestjs/common";
import { ShiftModuleBase } from "./base/shift.module.base";
import { ShiftService } from "./shift.service";
import { ShiftController } from "./shift.controller";
import { ShiftResolver } from "./shift.resolver";

@Module({
  imports: [ShiftModuleBase],
  controllers: [ShiftController],
  providers: [ShiftService, ShiftResolver],
  exports: [ShiftService],
})
export class ShiftModule {}
