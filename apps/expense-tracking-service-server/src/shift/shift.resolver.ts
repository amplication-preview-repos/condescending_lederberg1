import * as graphql from "@nestjs/graphql";
import { ShiftResolverBase } from "./base/shift.resolver.base";
import { Shift } from "./base/Shift";
import { ShiftService } from "./shift.service";

@graphql.Resolver(() => Shift)
export class ShiftResolver extends ShiftResolverBase {
  constructor(protected readonly service: ShiftService) {
    super(service);
  }
}
