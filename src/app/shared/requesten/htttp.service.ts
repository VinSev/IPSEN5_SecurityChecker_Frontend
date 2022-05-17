import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class httpService {
    private url : string = "http://localhost:8080/api/v1";

    constructor(private http: HttpClient){}

    public get<T>(endpoint: string, body: T) : Observable<T>{      
     return this.http.get<T>(this.url + endpoint, body);
    }

    public post<T>(endpoint: string, body: T) : Observable<T>{
     return this.http.post<T>(this.url + endpoint, body);
    }

    public put<T>(endpoint: string, body : T) : Observable<T>{
     return this.http.put<T>(this.url + endpoint, body);
    }

    public delete<T>(endpoint: string, body: T) : Observable<T>{
      return this.http.delete<T>(this.url + endpoint, body);
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