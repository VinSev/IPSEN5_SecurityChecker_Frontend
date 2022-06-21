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
export class reportService {
  private subscription!: Subscription;
  public reports: Report[] = [];
  public scanList: string[] = [];
  public scanListValues: any[] = [];
  public scanUser: ScanUser = new ScanUser('www.roeland.com',true,'Roeland','roelandvdvelde@gmail.com')
  public report: ScanReport[] =[]
  public currentViewedRapport: Report = new Report(this.scanUser,this.report);

  public emptyRapport: Report = new Report(this.scanUser, this.report);

  constructor(private http: HttpService,
              private toastr: ToastrService) {
  }

  public getAllCustomerDataFromDatabase() {
    console.log("hallo");
    this.reports.push(this.emptyRapport)

    this.subscription = this.getAll()
      .subscribe(data => {
        this.reports = data;
        console.log('fuckyes');
      })
  }

  public getAll(): Observable<Report[]> {
    return this.http.getAll("/scan/all");
  }

  public changeCurrentViewedRapport(report: Report) {
    this.currentViewedRapport = report;

    this.scanList = [];
    this.scanListValues = [];

    for (let item in report.scanReports){
      this.scanList.push(item)
    }
    this.scanList.shift()
    this.scanList.pop();

    // this.scanListValues.push(rapport.scanresult.headers)
    // this.scanListValues.push(rapport.scanresult.XSSAndInjection)
    // this.scanListValues.push(rapport.scanresult.certificates)
    // this.scanListValues.push(rapport.scanresult.wordPressVulnerability)
    // this.scanListValues.push(rapport.scanresult.version)
    // this.scanListValues.push(rapport.scanresult.login)
    // this.scanListValues.push(rapport.scanresult.dataSecurity)
    // this.scanListValues.push(rapport.scanresult.seo)
    // this.scanListValues.push(rapport.scanresult.scanCategory.grade)
  }
}