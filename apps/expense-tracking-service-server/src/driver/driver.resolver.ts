import * as graphql from "@nestjs/graphql";
import { DriverResolverBase } from "./base/driver.resolver.base";
import { Driver } from "./base/Driver";
import { DriverService } from "./driver.service";

@graphql.Resolver(() => Driver)
export class DriverResolver extends DriverResolverBase {
  constructor(protected readonly service: DriverService) {
    super(service);
  }
}
