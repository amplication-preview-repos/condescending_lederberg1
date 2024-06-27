import { Module } from "@nestjs/common";
import { DriverModuleBase } from "./base/driver.module.base";
import { DriverService } from "./driver.service";
import { DriverController } from "./driver.controller";
import { DriverResolver } from "./driver.resolver";

@Module({
  imports: [DriverModuleBase],
  controllers: [DriverController],
  providers: [DriverService, DriverResolver],
  exports: [DriverService],
})
export class DriverModule {}
