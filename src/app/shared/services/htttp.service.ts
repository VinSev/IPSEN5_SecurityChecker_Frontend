import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class httpService {
    private url : string = "http://localhost:8080/api/v1";

    constructor(private http: HttpClient){}

    public get<T>(endpoint: string){      
     return this.http.get<HttpResponse<T>>(this.url + endpoint);
    }

    public post<T>(endpoint: string, body: T){
     return this.http.post<HttpResponse<T>>(this.url + endpoint, body);
    }

    public put<T>(endpoint: string, body : T){
     return this.http.put<HttpResponse<T>>(this.url + endpoint, body);
    }

    public delete<T>(endpoint: string){
      return this.http.delete<HttpResponse<T>>(this.url + endpoint);
    }
  }