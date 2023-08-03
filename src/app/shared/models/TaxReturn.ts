import { ActionStatus } from "./TaxStatus"

export interface TaxReturn{
  income: number,
  filingDate: Date,
  adjustedGrossIncome: number,
  taxableIncome: number,
  totalTax: number,
  status:ActionStatus,
  taxWithheld: number,
  id: number
}
