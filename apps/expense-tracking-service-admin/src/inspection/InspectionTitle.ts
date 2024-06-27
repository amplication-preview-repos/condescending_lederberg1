import { Inspection as TInspection } from "../api/inspection/Inspection";

export const INSPECTION_TITLE_FIELD = "id";

export const InspectionTitle = (record: TInspection): string => {
  return record.id?.toString() || String(record.id);
};
