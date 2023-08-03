import { TaxReturn } from './TaxReturn';
export interface AllUserInfo{

  userId:string,
  userName:string,

  email:string,
  phoneNumber:string,

  taxReturnDtoReponses:TaxReturn[]
}
