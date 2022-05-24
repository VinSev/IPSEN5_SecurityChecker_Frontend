import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})

export class RolGuardService implements CanActivate{

    constructor(public router: Router, public Auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot): boolean{
        const expectedRole = route.data['expectedRole'];
        const token = localStorage.getItem('token');

        if(token){
            let role = localStorage.getItem('role');
            if(!this.Auth.isAuthenticated() || role !== expectedRole){
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/auth/login']);
        return false;
    }
}