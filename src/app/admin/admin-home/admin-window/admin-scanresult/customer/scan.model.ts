import { customer } from "./customer.model";
import { scanResult } from "./scanResult.model";

export class scan{
    scanId: number;
    url: string;
    updateDate: string;
    scanUser: customer;

    constructor(){
        this.scanId=0;
        this.url = 'google.com';
        this.updateDate = '19-02-2000';
        this.scanUser = new customer;
    }
}