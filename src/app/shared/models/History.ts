import { ActionStatus } from "./TaxStatus";

export interface history{
  id: number,
  status: ActionStatus,
  timestamp: Date
}
