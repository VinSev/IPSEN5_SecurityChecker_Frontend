import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Md5 } from "ts-md5";
import { httpService } from "./http.service";
import jwt_decode from 'jwt-decode';
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class authenticationService{
  role: Subject<string> = new Subject<string>();
  email = "";

    constructor(private http: httpService, private router : Router) { }

    authenticate(email: string, password: string){
        let hash = this.hashPassword(password);
        console.log(hash);
        
        this.http.post<any>('/test/test', {email: email,password: hash})
        .subscribe((data) => {
         if(data !== null){
           localStorage.setItem("token", data.token);
           this.router.navigate(['']);

           const tokenPayload: any = jwt_decode(data.token);
           let role = tokenPayload.role;
           this.role.next(role);
           this.email = data.email;
         }
        })

      }


    hashPassword(password: string): string{
        return Md5.hashStr(password);
      }
}