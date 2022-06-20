import { scan } from "./scan.model";
import { scanCategory } from "./scanCategory.model";

export class scanResult {
  scan_scan_id: number;
  headers: number;
  XSSAndInjection: number;
  certificates: number;
  wordPressVulnerability: number;
  version: number;
  login: number;
  dataSecurity: number;
  seo: number;
  scanCategory: scanCategory[];

  constructor(){
    this.scan_scan_id = 0;
    this.headers= 0;
    this.XSSAndInjection = 0;
    this.certificates = 0;
    this.wordPressVulnerability = 0;
    this.version = 0;
    this.login = 0;
    this.dataSecurity = 0;
    this.seo = 0;
    this.scanCategory = [];
  }
}
  