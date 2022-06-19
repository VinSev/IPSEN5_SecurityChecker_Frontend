import { apiScan } from "./apiScan.model";
import { scan } from "./scan.model";

export class scanCategory{
    id: number;
    scan: scan;
    loading: boolean;
    grade: number;
    result: string;
    apiScan: apiScan;

    constructor(){
        this.id = 0;
        this.scan = new scan;
        this.loading= false;
        this.grade = 0;
        this.result ='';
        this.apiScan = new apiScan;
    }
}