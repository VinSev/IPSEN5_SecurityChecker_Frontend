import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public adminPageNavigation: string = 'scans';

  constructor() {
  }

  changeDropDownLocation(newLocation :string){
      this.adminPageNavigation = newLocation;
  }
}
