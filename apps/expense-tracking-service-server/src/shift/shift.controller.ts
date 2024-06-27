import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShiftService } from "./shift.service";
import { ShiftControllerBase } from "./base/shift.controller.base";

@swagger.ApiTags("shifts")
@common.Controller("shifts")
export class ShiftController extends ShiftControllerBase {
  constructor(protected readonly service: ShiftService) {
    super(service);
  }
}
