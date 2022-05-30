import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient){}

  public getAll<T>(endpoint: string, body?: T) : Observable<T[]>{
    return this.http.get<T[]>(environment.baseURL + endpoint, body);
  }

  public get<T>(endpoint: string, body?: T) : Observable<T>{
   return this.http.get<T>(environment.baseURL + endpoint, body);
  }

  public post<T>(endpoint: string, body?: T) : Observable<T>{
   return this.http.post<T>(environment.baseURL + endpoint, body)
  }

  public put<T>(endpoint: string, body?: T) : Observable<T>{
   return this.http.put<T>(environment.baseURL + endpoint, body);
  }

  public delete<T>(endpoint: string, body?: T) : Observable<T>{
    return this.http.delete<T>(environment.baseURL + endpoint, {body: body});
  }
}

//the code below is the code you have to use in other services to talk to the backend

// this.httpService.get('/test/test', 'gerrald')
// .subscribe((data) => {
//   console.log(data);
// })

// this.httpService.post('/test/test', 'gerrald')
// .subscribe((data) => {
//   console.log(data);
// })

// this.httpService.put('/test/test', 'gerrald')
// .subscribe((data) => {
//   console.log(data);
// })

// this.httpService.delete('/test/test', 'gerrald')
// .subscribe((data) => {
//   console.log(data);
// })
