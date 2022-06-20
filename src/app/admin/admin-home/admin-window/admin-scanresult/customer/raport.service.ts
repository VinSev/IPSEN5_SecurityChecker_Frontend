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
  public scanUser: ScanUser = new ScanUser('www.roeland.com',true,'Roeland','roelandvdvelde@gmail.com')

  public scanRaport: ScanReport[] = []

  public currentViewedRapport: Report = new Report(this.scanUser,this.scanRaport);

  public emptyRapport: Report = new Report(this.scanUser, this.scanRaport);

  constructor(private http: HttpService,
              private toastr: ToastrService) {
  }

  public getAllCustomerDataFromDatabase() {

  this.scanRaport.push(new ScanReport('scan1','end/point/one', 7))
  this.scanRaport.push(new ScanReport('scan2','end/point/two', 10))
  this.scanRaport.push(new ScanReport('scan3','end/point/three', 5))
  this.scanRaport.push(new ScanReport('scan4','end/point/four', 2))
  this.scanRaport.push(new ScanReport('scan5','end/point/five', 8))
  this.scanRaport.push(new ScanReport('scan6','end/point/six', 7))

  this.emptyRapport.scanReports = this.scanRaport;

    this.raports.push(this.emptyRapport) 
    console.log(this.raports);

    this.subscription = this.getAll()
      .subscribe(data => {
        this.raports = data;        
      })
  }

  public getAll(): Observable<Report[]> {
    return this.http.getAll("/scan/all");
  }

  public changeCurrentViewedRapport(raport: Report) {
    this.currentViewedRapport = raport;
  }
}
