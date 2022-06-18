import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, Subscription } from "rxjs";
import { HttpService } from "src/app/shared/services/http.service";
import { customer } from "./customer.model";

@Injectable({
  providedIn: 'root'
})

export class customerService {
    private subscription!: Subscription;

    public listOfCustomers: customer[] = [];

  constructor(private httpService: HttpService,
              private toastr: ToastrService) {
  }

  public getAllCustomerDataFromDataBase(){
    this.httpService.getAll("/scan/all")
    .subscribe((data) =>{
        console.log(data);
        console.log('st');
        
    })
  }

  

}
