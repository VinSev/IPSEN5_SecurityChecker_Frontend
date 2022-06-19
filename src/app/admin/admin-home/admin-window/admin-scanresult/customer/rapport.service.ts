import {Injectable} from '@angular/core';
import {HttpService} from 'src/app/shared/services/http.service';
import {ToastrService} from 'ngx-toastr';
import {Observable, Subscription} from 'rxjs';
import {rapport} from './rapport.model';
import {customer} from './customer.model';
import {scanResult} from './scanResult.model';

@Injectable({
  providedIn: 'root'
})
export class customerService {
  private subscription!: Subscription;
  public customers: rapport[] = [];
  public scanList: string[] = [];
  public scanListValues: any[] = [];
  public customer: customer = new customer()
  public rapport: scanResult = new scanResult()
  public currentViewedRapport: rapport = new rapport(this.rapport, this.customer);

  public testRapport: rapport = new rapport(new scanResult(), new customer());

  constructor(private http: HttpService,
              private toastr: ToastrService) {
  }

  public getAllCustomerDataFromDatabase() {
    this.subscription = this.getAll()
      .subscribe(data => {
        this.customers = data;
        this.customers.push(this.testRapport)
        console.log(this.testRapport);

      })
  }

  public getAll(): Observable<rapport[]> {
    return this.http.getAll("/scan/all");
  }

  public changeCurrentViewedRapport(rapport: rapport) {
    this.currentViewedRapport = rapport;

    for (let item in rapport.scanresult){
      this.scanList.push(item)
    }
    this.scanList.shift()
    this.scanList.pop();

    this.scanListValues.push(rapport.scanresult.headers)
    this.scanListValues.push(rapport.scanresult.XSSAndInjection)
    this.scanListValues.push(rapport.scanresult.certificates)
    this.scanListValues.push(rapport.scanresult.wordPressVulnerability)
    this.scanListValues.push(rapport.scanresult.version)
    this.scanListValues.push(rapport.scanresult.login)
    this.scanListValues.push(rapport.scanresult.dataSecurity)
    this.scanListValues.push(rapport.scanresult.seo)
    // this.scanListValues.push(rapport.scanresult.scanCategory.grade)

    console.log(this.scanList);
    console.log(this.scanListValues)

  }
}
