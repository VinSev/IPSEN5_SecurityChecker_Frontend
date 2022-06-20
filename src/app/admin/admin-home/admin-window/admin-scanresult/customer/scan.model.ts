import { customer } from "./customer.model";
import { scanResult } from "./scanResult.model";

export class scan{
    scanId: number;
    url: string;
    updateDate: string;
    scanUser: customer;

    constructor(){
        this.scanId= 0;
        this.url = 'none';
        this.updateDate = '01-01-2022';
        this.scanUser = new customer;
    }
}