import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authenticationService } from "../services/authentication.Service";

@Injectable()
export class Http_Intercepter implements HttpInterceptor {

    constructor(public auth: authenticationService) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: string | null = localStorage.getItem("token");
        if(token == null) {
          return next.handle(req);
        }
    
        let tokenizedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(tokenizedRequest);
      }
}