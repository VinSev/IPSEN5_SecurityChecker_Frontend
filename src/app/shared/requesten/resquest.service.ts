import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs";
import {User} from "../models/user.type";

@Injectable({providedIn:"root"})
export class RequestService {

  private URL: string = "";
  private use: string = "";
  private host: string = "";
  private isFinished: boolean= false;
  private AMOUNT_SCANS: number =  15;

  constructor(private http: HttpClient) {
    // this.isFinished =  this.scanProgressService.isScanFinished()
  }

  prepareURL(status: string, specific?: string) {
    this.URL = environment.serverURL + status;
    if (specific !== "") {
      this.URL = (this.URL + "/" + specific);
    }
    return this.URL;
  }

  prepareHeader() {
    let headerOfRequest : HttpHeaders  = new HttpHeaders();
    // if (this.isFinished) {
    //   headerOfRequest = new HttpHeaders({
    //     "authorization":"Bearer " + environment.token
    //   });
    // }
    return headerOfRequest;
  }
            // start/ end/update   / GET/ ADD/etc       ?admin
  requestToScan(status: string, duty: string, specific?: string, userInfo?: User) {
    this.URL = this.prepareURL(status, specific);
    return this.http.request<any[]>(
      duty, this.URL,
      {
        body: userInfo,
        headers: this.prepareHeader()
      }).pipe(
      tap(
        (updates:any[]) => {
        if (updates.length == this.AMOUNT_SCANS) {
          this.requestToScan("finished", "get")
        }
        if(status == "finished"){
          // this.scanProgressService.setScanToFinished(updates)
        }
      }));
  }

}
