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
    this.updateDate = '01-01-2022';
    this.url = 'none';
    this.user = user;
  }

}
  