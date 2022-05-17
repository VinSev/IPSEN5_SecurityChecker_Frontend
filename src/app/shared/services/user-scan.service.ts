import {Injectable} from "@angular/core";
import {Scan} from "../models/scan.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserScanService {
  public userScan: BehaviorSubject<Scan> = new BehaviorSubject<Scan>(new Scan("", false));

  constructor() {
  }

  setScanInfo(website: string, ownsership: boolean, name?: string, email?: string) {
    const newScan = new Scan(website,ownsership);
    this.userScan.next(newScan);

  }


}
