import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "../shared/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private dropDownLocation = new BehaviorSubject('');
    _dropDownLocation = this.dropDownLocation.asObservable();

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  changeDropDownLocation(newLocation :string){
      this.dropDownLocation.next(newLocation)
  }

  createTip(tip: string){
    
  }

  updateTip(tip: string){

  }

  deleteTip(){

  }
}