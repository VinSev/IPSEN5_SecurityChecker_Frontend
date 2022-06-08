import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpService} from "../../shared/services/http.service";
import {Tips} from "../../shared/models/tips.model";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  private currentUsedTip = new BehaviorSubject(true);
  public _currentusedTip = this.currentUsedTip.asObservable();

  public tipmodel: Tips = new Tips('');
  public tipToSend: Tips = new Tips('');

  constructor(private http: HttpService,
              private router: Router,
              private toastr: ToastrService) { }

  changeCurrentUsedTip(tip :Tips){
    this.tipmodel = tip;
    this.currentUsedTip.next(!this.changeCurrentUsedTip)    
}

  public getAll(): Observable<Tips[]> {
    return this.http.getAll("/tips");
  }

  public createTip(tip: string){
    this.tipToSend.text = tip;
    this.http.post('/tips', this.tipToSend)
    .subscribe((data) => {
      this.toastr.success("De tip met ID: " + this.tipmodel.id + " is verwijderd!", "", {
        tapToDismiss: true,
        positionClass: "toast-bottom-right",
        timeOut: 1500
      });
    })
  }

  public updateTip(tip: string){
    this.tipmodel.text = tip;
    this.http.put('/tips', this.tipmodel)
    .subscribe((data) => {
      this.toastr.success("De tip met ID: " + this.tipmodel.id + " is verwijderd!", "", {
        tapToDismiss: true,
        positionClass: "toast-bottom-right",
        timeOut: 1500
      });
    })
  }

  public deleteTip(){
    this.http.delete('/tips', this.tipmodel)
    .subscribe((data) => {
      this.toastr.success("De tip met ID: " + this.tipmodel.id + " is verwijderd!", "", {
        tapToDismiss: true,
        positionClass: "toast-bottom-right",
        timeOut: 1500
      });
    })
  }
}
