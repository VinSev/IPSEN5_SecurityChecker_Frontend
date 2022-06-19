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
    this.updateDate = '';
    this.url = '';
    this.user = user;
  }

}
  