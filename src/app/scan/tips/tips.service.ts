import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpService} from "../../shared/services/http.service";
import {Tips} from "../../shared/models/tips.model";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  private currentUsedTip = new BehaviorSubject(true);
  public _currentusedTip = this.currentUsedTip.asObservable();

  public tipmodel: Tips = new Tips('');

  constructor(private http: HttpService, private router: Router) { }

  changeCurrentUsedTip(tip :Tips){
    this.tipmodel = tip;
    this.currentUsedTip.next(!this.changeCurrentUsedTip)    
}

  public getAll(): Observable<Tips[]> {
    return this.http.getAll("/tips");
  }

  public createTip(tip: string){    
    this.tipmodel.text = tip;    
    this.http.post('/tips', this.tipmodel)
    .subscribe((data) => {
      window.location.reload()
    })
  }

  public updateTip(tip: string){
    this.tipmodel.text = tip;
    this.http.put('/tips', this.tipmodel)
    .subscribe((data) => {
        console.log(data);
    })
  }

  public deleteTip(){
    this.http.delete('/tips', this.tipmodel)
    .subscribe((data) => {
    })
  }
}
