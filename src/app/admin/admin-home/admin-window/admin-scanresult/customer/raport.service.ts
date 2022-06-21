import {Injectable} from '@angular/core';
import {HttpService} from 'src/app/shared/services/http.service';
import {ToastrService} from 'ngx-toastr';
import {Observable, Subscription} from 'rxjs';
import { Report } from 'src/app/shared/models/report.model';
import { ScanUser } from 'src/app/shared/models/scan-user.model';
import { ScanReport } from 'src/app/shared/models/scan-report.model';

@Injectable({
  providedIn: 'root'
})
export class raportService {
  public emptyScanUser: ScanUser = new ScanUser('-',true,'-','-')
  public emptyScanReport: ScanReport[] = []
  public emptyReport: Report = new Report(this.emptyScanUser, this.emptyScanReport,"22-06-22");

  public scanLimit: number = 0;
  private subscription!: Subscription;
  public reports: Report[] = [];
  public currentViewedReport: Report = new Report(this.emptyScanUser,this.emptyScanReport, "-");

  constructor(private http: HttpService,
              private toastr: ToastrService) {
  }

  public getAllCustomerDataFromDatabase() {
  this.emptyScanReport.push(new ScanReport('-','-',[], 1))
  this.emptyReport.scanReports = this.emptyScanReport;
    this.subscription = this.getAll()
      .subscribe(data => {
        this.reports = data;
      })
  }

  public getAll(): Observable<Report[]> {
    return this.http.getAll("/reports");
  }

  public getScanLimit(){
    this.http.get<number>("/scan/scanlimiet").subscribe((data) =>{
      this.scanLimit = data;
    })
  }

  public changeMaxScanLimit(maxScanLimit: HTMLInputElement){
    this.scanLimit = +maxScanLimit.value;
    this.http.post<number>("/scan/scanlimiet", this.scanLimit).subscribe((data) =>{
    })
  }

  public changeCurrentViewedRapport(report: Report) {
    this.currentViewedReport = report;
  }
}
