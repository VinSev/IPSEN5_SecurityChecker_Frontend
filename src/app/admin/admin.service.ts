import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "../shared/services/http.service";
import {Tips} from "../shared/models/tips.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private dropDownLocation = new BehaviorSubject('');
    public tips: Tips[] = [];
    public tipmodel: Tips = new Tips('');
    _dropDownLocation = this.dropDownLocation.asObservable();

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  changeDropDownLocation(newLocation :string){
      this.dropDownLocation.next(newLocation)
  }


  createTip(tip: string){
    console.log("creating tip");
    
    this.tipmodel.text = tip;
    console.log(this.tipmodel.text);
    
    this.httpService.put('/tips', this.tipmodel)
    .subscribe((data) => {
    })
  }
  readAllTips(){
    this.httpService.getAll('/tips')
    .subscribe((data) => {
        console.log(data);
    })
  }
  updateTip(tip: string){
    this.httpService.post('/tips', 'NEW TIP')
    .subscribe((data) => {
        console.log(data);
    })
  }
  deleteTip(){
    this.httpService.delete('/tips', 'SPECIFIC TIP')
    .subscribe((data) => {
    })
  }
}