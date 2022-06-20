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
  private subscription!: Subscription;
  public raports: Report[] = [];
  public scanList: string[] = [];
  public scanListValues: any[] = [];
  public scanUser: ScanUser = new ScanUser('www.roeland.com',true,'Roeland','roelandvdvelde@gmail.com')
  public raport: ScanReport[] =[]
  public currentViewedRapport: Report = new Report(this.scanUser,this.raport);

  public emptyRapport: Report = new Report(this.scanUser, this.raport);

  constructor(private http: HttpService,
              private toastr: ToastrService) {
  }

  public getAllCustomerDataFromDatabase() {
    console.log("hallo");
    this.raports.push(this.emptyRapport)

    this.subscription = this.getAll()
      .subscribe(data => {
        this.raports = data;
        console.log('fuckyes');
      })
  }

  public getAll(): Observable<Report[]> {
    return this.http.getAll("/scan/all");
  }

  public changeCurrentViewedRapport(raport: Report) {
    this.currentViewedRapport = raport;

    this.scanList = [];
    this.scanListValues = []; 

    for (let item in raport.scanReports){
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
