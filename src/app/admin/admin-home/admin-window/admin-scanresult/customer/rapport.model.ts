import { customer } from "./customer.model";
import { scanResult } from "./scanResult.model";

export class rapport{
    scanId: number;
    scanresult: scanResult;
    updateDate: string;
    url: string;
    user: customer;

  constructor(scanresult: scanResult, user: customer){
    this.scanId = 0;
    this.scanresult = scanresult;
    this.updateDate = '19-06-2021';
    this.url = 'google.com';
    this.user = user;
  }

}
  