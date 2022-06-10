import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authenticationService } from "../services/authentication.Service";

@Injectable()
export class Http_Intercepter implements HttpInterceptor {

    constructor(public auth: authenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        console.log("DIT WORD UITGEVEORD");
        
        request = request.clone({
            setHeaders: {
                "Authorization" :"Bearer " + localStorage.getItem('token')
            }
        });

        return next.handle(request);
    }
}