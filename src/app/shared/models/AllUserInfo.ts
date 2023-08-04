import { Address } from './Address';
import { TaxReturn } from './TaxReturn';
export interface AllUserInfo{

  userId:string,
  userName:string,

  email:string,
  phoneNumber:string,
  address:Address
  taxReturnDtoReponses:TaxReturn[]
}
