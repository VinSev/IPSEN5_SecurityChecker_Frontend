import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {User} from "../models/user.type";
import {httpService} from "./htttp.service";
import {ScanResult} from "../models/ScanResult.type";
import {UserScanService} from "../services/user-scan.service";

@Injectable({providedIn: "root"})
export class RequestService {

  constructor(private http: HttpClient,
              private httpService: httpService,
              private userScanService: UserScanService) {
    // this.isFinished =  this.scanProgressService.isScanFinished()
  }

                // ?admin
  requestToScan(userInfo?: User) {
    return this.httpService.get<any>("/result/start",
      {url: this.userScanService.userScan.value.website}
    ).pipe(
      tap(
        (scans: ScanResult) => {
          if (scans.SEO != undefined || scans.SEO != null) {
            // this.scanProgressService.setScanToFinished(scans)
          }
        }));
  }

}
