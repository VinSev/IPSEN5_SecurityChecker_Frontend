import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private dropDownLocation = new BehaviorSubject('');
    _dropDownLocation = this.dropDownLocation.asObservable();

  constructor() {
  }

  changeDropDownLocation(newLocation :string){
      this.dropDownLocation.next(newLocation)
  }
}