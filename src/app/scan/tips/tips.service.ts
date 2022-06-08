import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpService} from "../../shared/services/http.service";
import {Tips} from "../../shared/models/tips.model";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  private isThereACurrentTip = new BehaviorSubject(true);
  public _isThereACurrentTip = this.isThereACurrentTip.asObservable();

  public tipToSendWithId: Tips = new Tips('');
  public tipToSendWithoutId: Tips = new Tips('');

  constructor(private http: HttpService,
              private toastr: ToastrService) { }

  changeCurrentUsedTip(tip :Tips){
    this.tipToSendWithId = tip;
    this.isThereACurrentTip.next(!this.changeCurrentUsedTip)    
}

  public createTip(tip: string){
    this.tipToSendWithoutId.text = tip;
    this.http.post('/tips', this.tipToSendWithoutId)
    .subscribe((data) => {
      this.ShowToastOnPage("De tip is aangemaakt")
    })
  }

  public getAll(): Observable<Tips[]> {
    return this.http.getAll("/tips");
  }

  public updateTip(tip: string){
    this.tipToSendWithId.text = tip;
    this.http.put('/tips', this.tipToSendWithId)
    .subscribe((data) => {
      this.ShowToastOnPage("De tip is aangepast")
    })
  }

  public deleteTip(){
    this.http.delete('/tips', this.tipToSendWithId)
    .subscribe((data) => {
      this.ShowToastOnPage("De tip met ID: " + this.tipToSendWithId.id + " is verwijderd!")
    })
  }

  public ShowToastOnPage(message: string){
    this.toastr.success(message, "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-right",
      timeOut: 1500
    });
  }
}
