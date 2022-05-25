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
          let role = data.user.roles;
          this.role.next(role);
           this.saveAuthenticatedAdminInLocalStorage(role, data.user.email, data.token);
         }
        })
      }

    saveAuthenticatedAdminInLocalStorage(roles: string, email: string, token: string ){      
      localStorage.setItem("token", token);
      localStorage.setItem("role", roles);
      localStorage.setItem("email", email);

      this.router.navigate(['']);      
    }
}