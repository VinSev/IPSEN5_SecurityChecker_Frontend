import {Injectable} from "@angular/core";
import {Scan} from "../models/scan.model";
import {BehaviorSubject} from "rxjs";
import {ScanCategoryType} from "../models/scan-category.type";

@Injectable({
  providedIn: 'root'
})
export class UserScanService {
  public userScan: BehaviorSubject<Scan> = new BehaviorSubject<Scan>(new Scan("", false));

  constructor() {
  }

  setScanInfo(website: string, ownership: boolean, name?: string) {
    let newScan = new Scan(website, ownership);
    name? newScan.name = name : null
    this.userScan.next(newScan);

  }


  setScanToFinished(scans: ScanCategoryType[]) {
    let newUserScan: Scan = this.userScan.value;
    for(let scan of scans){
      newUserScan.scanCategories.push(scan)
    }
    this.userScan.next(newUserScan);
  }
}
