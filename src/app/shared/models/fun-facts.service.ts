import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FunFactsService {

  constructor(private http: HttpClient) { }

  public get(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:8080/api/v1" + "/funfacts");
  }

  public post(funFact: string): Observable<string[]> {
    return this.http.post<string[]>("http://localhost:8080/api/v1" + "/funfacts", {funFact});
  }

  public delete(funFact: string): Observable<string[]> {
    return this.http.delete<string[]>("http://localhost:8080/api/v1" + "/funfacts", {body: {funFact}});
  }
}
