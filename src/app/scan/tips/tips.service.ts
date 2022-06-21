import { Injectable } from '@angular/core';
import { Observable, Subscription} from "rxjs";
import {HttpService} from "../../shared/services/http.service";
import {Tips} from "../../shared/models/tips.model";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TipsService{
  private subscription!: Subscription;

  public inEditMode: boolean = false;
  public tipToSendWithId: Tips = new Tips('');
  public tipToSendWithoutId: Tips = new Tips('');
  public tips: Tips[] = [];

  constructor(private http: HttpService,
              private toastr: ToastrService) { }

  changeCurrentUsedTip(tip :Tips){
    this.tipToSendWithId = tip;
    this.inEditMode = true;
}

public setTipsIntoList(){
  this.subscription = this.getAll()
  .subscribe(response => {
    this.tips = response;
  });
}

  public createTip(tip: string){
    this.tipToSendWithoutId.text = tip;
    this.http.post('/tips', this.tipToSendWithoutId)
    .subscribe(() => {
      this.cleanInputField();
      this.ShowToastOnPage("De tip is aangemaakt")
    })
  }

  public getAll(): Observable<Tips[]> {
    return this.http.getAll("/tips");
  }

  public updateTip(tip: string){
    this.tipToSendWithId.text = tip;
    this.http.put('/tips', this.tipToSendWithId)
    .subscribe(() => {
      this.cleanInputField();
      this.ShowToastOnPage("De tip is aangepast")
    })
  }

  public deleteTip(){
    this.http.delete('/tips', this.tipToSendWithId)
    .subscribe(() => {
      this.cleanInputField();
      this.ShowToastOnPage("De tip met ID: " + this.tipToSendWithId.id + " is verwijderd!")
    })
  }

  public cleanInputField(){
    this.inEditMode = false;
    this.tipToSendWithId.text = '';
    this.setTipsIntoList();

  }

  public ShowToastOnPage(message: string){
    this.toastr.success(message, "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-right",
      timeOut: 1500
    });
  }
}
