import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private http: HttpClient) { }

  //TODO: This is a temporary 'solution'
  public get(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:8080/api/v1" + "/tips");
  }
}
