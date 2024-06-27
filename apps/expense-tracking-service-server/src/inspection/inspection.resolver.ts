import * as graphql from "@nestjs/graphql";
import { InspectionResolverBase } from "./base/inspection.resolver.base";
import { Inspection } from "./base/Inspection";
import { InspectionService } from "./inspection.service";

@graphql.Resolver(() => Inspection)
export class InspectionResolver extends InspectionResolverBase {
  constructor(protected readonly service: InspectionService) {
    super(service);
  }
}
