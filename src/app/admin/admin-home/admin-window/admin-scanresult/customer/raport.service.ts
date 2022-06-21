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
  public emptyScanUser: ScanUser = new ScanUser('www.getBigMarketing.com',true,'getBigMarketing','-')
  public emptyScanRaport: ScanReport[] = []
  public emptyRapport: Report = new Report(this.emptyScanUser, this.emptyScanRaport,"22-06-22");

  public scanLimit: number = 0;
  private subscription!: Subscription;
  public raports: Report[] = [];
  public currentViewedRapport: Report = new Report(this.emptyScanUser,this.emptyScanRaport, "22-06-22");

  constructor(private http: HttpService,
              private toastr: ToastrService) {
  }

  public getAllCustomerDataFromDatabase() {

  this.emptyScanRaport.push(new ScanReport('scan1','end/point/one', 7))
  this.emptyScanRaport.push(new ScanReport('scan2','end/point/two', 10))
  this.emptyScanRaport.push(new ScanReport('scan3','end/point/three', 5))
  this.emptyScanRaport.push(new ScanReport('scan4','end/point/four', 2))
  this.emptyScanRaport.push(new ScanReport('scan5','end/point/five', 8))
  this.emptyScanRaport.push(new ScanReport('scan6','end/point/six', 7))

  this.emptyRapport.scanReports = this.emptyScanRaport;

    this.raports.push(this.emptyRapport) 

    this.getScanLimit();
    this.subscription = this.getAll()
      .subscribe(data => {
        this.raports = data;        
      })
  }

  public getAll(): Observable<Report[]> {
    return this.http.getAll("/scan/all");
  }

  public getScanLimit(){
    this.http.get<number>("/scan/scanlimiet").subscribe((data) =>{
      this.scanLimit = data;
    })
  }
  
  public changeMaxScanLimit(maxScanLimit: HTMLInputElement){
    this.scanLimit = +maxScanLimit.value;
    this.http.post<number>("/scan.scanlimiet", this.scanLimit).subscribe((data) =>{
      console.log('succes');
      
    })
  }

  public changeCurrentViewedRapport(raport: Report) {
    this.currentViewedRapport = raport;
  }
}
