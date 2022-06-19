import { scan } from "./scan.model";
import { scanCategory } from "./scanCategory.model";

export class scanResult {
  scan: scan;
  headers: number;
  XSSAndInjection: number;
  certificates: number;
  wordPressVulnerability: number;
  version: number;
  login: number;
  dataSecurity: number;
  seo: number;
  scanCategory: scanCategory;

  constructor(){
    this.scan = new scan;
    this.headers= 1;
    this.XSSAndInjection = 2;
    this.certificates = 3;
    this.wordPressVulnerability = 4;
    this.version = 5;
    this.login = 6;
    this.dataSecurity = 7;
    this.seo = 8;
    this.scanCategory = new scanCategory;
  }
}
  