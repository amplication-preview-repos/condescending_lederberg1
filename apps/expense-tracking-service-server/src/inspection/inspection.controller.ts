import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InspectionService } from "./inspection.service";
import { InspectionControllerBase } from "./base/inspection.controller.base";

@swagger.ApiTags("inspections")
@common.Controller("inspections")
export class InspectionController extends InspectionControllerBase {
  constructor(protected readonly service: InspectionService) {
    super(service);
  }
}
