import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {User} from "../models/user.type";
import {httpService} from "./htttp.service";
import {ScanService} from "../../scan-progress/scan/scan.service";
import {ScanResult} from "../models/ScanResult.type";

@Injectable({providedIn: "root"})
export class RequestService {

  constructor(private http: HttpClient,
              private httpService: httpService,
              private scanService: ScanService) {
    // this.isFinished =  this.scanProgressService.isScanFinished()
  }

                // ?admin
  requestToScan(userInfo?: User) {
    return this.httpService.get<any>("/result/start",
      {url: this.scanService.getCurrentScan().website}
    ).pipe(
      tap(
        (scans: ScanResult) => {
          if (scans.SEO != undefined || scans.SEO != null) {
            // this.scanProgressService.setScanToFinished(scans)
          }
        }));
  }

}
