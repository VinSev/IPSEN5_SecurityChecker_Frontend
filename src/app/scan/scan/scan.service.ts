import {Injectable} from '@angular/core';
import {Iterator} from "../../shared/models/iterator.model";
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Report} from "../../shared/models/report.model";
import {ScanReport} from "../../shared/models/scan-report.model";
import {ScanUser} from "../../shared/models/scan-user.model";

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  public report: Report = new Report(new ScanUser(), [],'');

  constructor(private http: HttpService,
              private router: Router,
              private toastr: ToastrService,
              ) {
    this.report.scanReports.push(new ScanReport("Header", "/header"));
    this.report.scanReports.push(new ScanReport("Certificate", "/certificate"));
    this.report.scanReports.push(new ScanReport("Vulnerability", "/vulnerability"));
    // this.report.scanReports.push(new ScanReport("XSS & Injection", "/scan/xss-and-injection"));
    this.report.scanReports.push(new ScanReport("Seo", "/seo"));
  }

  public start(): void {
    let iterator: Iterator<ScanReport> = new Iterator<ScanReport>(this.report.scanReports);
    this.scan(iterator);
  }

  private async scan(iterator: Iterator<ScanReport>): Promise<void> {
    if (!iterator.hasNext()) {
      return;
    }
    let scanReport: ScanReport = iterator.next();
    scanReport.loading = true;
    console.log(scanReport.title)

    this.http.post("/scan" + scanReport.endpoint + "/" + this.report.scanUser.website, scanReport)
      .subscribe({
        next: (response) => {
          scanReport = response;
          console.log(scanReport.title + " : " + scanReport.result)
        },
        complete: () => {
          this.scan(iterator);
        },
        error: error => {
          scanReport.grade = -1;
          console.log("Error : " + error)
          this.scan(iterator);
        }
      });
  }

  public sendMail(): void {
    this.http.post("/mail", this.report)
      .subscribe();
  }

  // private filterWebsite() {
  //   let searchValues: string[] = [
  //     "https://",
  //     "http://"
  //   ]
  //   for (let searchValue of searchValues) {
  //     if(this.website.startsWith(searchValue)) {
  //       this.website = this.website.slice(searchValue.length, this.website.length - 1)
  //     }
  //   }
  //   let pathIndex = this.website.indexOf("/") > -1 ? this.website.indexOf("/") : this.website.length;
  //   this.website = this.website.slice(0, pathIndex);
  // }
}
