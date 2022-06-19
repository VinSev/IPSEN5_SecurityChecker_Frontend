import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
import {Observable, scan, Subscription} from 'rxjs';
import { rapport } from './rapport.model';
import { customer } from './customer.model';
import { scanResult } from './scanResult.model';

@Injectable({
  providedIn: 'root'
})
export class customerService{
    private subscription!: Subscription;
    public customers: rapport[] =[];
    public scanList: scanResult[] =[];

    public customer: customer = new customer()
    public rapport: scanResult = new scanResult()
    public currentViewedRapport: rapport = new rapport(this.rapport, this.customer);

    public testRapport: rapport = new rapport(new scanResult(), new customer());

  constructor(private http: HttpService,
              private toastr: ToastrService) { }

public getAllCustomerDataFromDatabase(){
  this.subscription = this.getAll()
  .subscribe(data =>{
    this.customers = data;
    this.customers.push(this.testRapport)
    console.log(this.testRapport);

  })
}

public getAll(): Observable<rapport[]> {
    return this.http.getAll("/scan/all");
  }

public changeCurrentViewedRapport(rapport: rapport){
  this.currentViewedRapport = rapport;
  // for (let scan in rapport.scanresult){

  // }

  this.scanList.push(rapport.scanresult)




  console.log(this.scanList);
}
}
