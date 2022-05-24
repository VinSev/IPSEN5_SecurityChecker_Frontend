import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "./http.service";
import { Subject } from "rxjs";
import { userRequest } from "../models/userRequest.model";

@Injectable({
    providedIn: 'root'
})

export class authenticationService{
  private endpoint = '/auth'
  role: Subject<string> = new Subject<string>();
  email = "";

    constructor(private http: HttpService, private router : Router) { }

    authenticate(email: string, password: string){
        let request = new userRequest(email, password)

        this.http.post<any>('/auth/login', request)
        .subscribe((data) => {          
         if(data !== null){
           this.saveAuthenticatedAdminInLocalStorage(data);
         }
         //do stuff
        })
      }

    saveAuthenticatedAdminInLocalStorage(data: any){
      let role = data.user.roles;
      this.role.next(role);
      this.email = data.user.email;
      
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", role);
      localStorage.setItem("email", this.email);

      this.router.navigate(['']);      
    }
}