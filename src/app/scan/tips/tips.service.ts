import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../shared/services/http.service";
import {Tips} from "../../shared/models/tips.model";

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private http: HttpService) { }

  public getAll(): Observable<Tips[]> {
    return this.http.getAll("/tips");
  }
}
