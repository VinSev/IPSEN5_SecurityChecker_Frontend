import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpService} from "./http.service";
import {Subject} from "rxjs";
import {userRequest} from "../models/userRequest.model";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})

export class authenticationService {
  private endpoint = '/auth'
  role: Subject<string> = new Subject<string>();
  email = "";

  constructor(private http: HttpService,
              private router: Router,
              private toastr: ToastrService) {
  }

  authenticate(email: string, password: string) {
    let request = new userRequest(email, password)

    this.http.post<any>('/auth/login', request)
      .subscribe({
        next: data => {
          let role = data.user.roles;
          this.role.next(role);
          this.saveAuthenticatedAdminInLocalStorage(role, data.user.email, data.token);
          this.toastr.success("Uw gegevens zijn juist verstuurd!", "", {
            tapToDismiss: true,
            positionClass: "toast-bottom-right",
            timeOut: 1500
          });
        },
        error: () => {
          this.toastr.error("Het versturen van uw gegevens is niet gelukt. Controleer uw ingevoerde gegevens!", "", {
            tapToDismiss: true,
            positionClass: "toast-bottom-right",
            timeOut: 1500
          });
        }
      });
  }

  saveAuthenticatedAdminInLocalStorage(roles: string, email: string, token: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("role", roles);
    localStorage.setItem("email", email);

    this.router.navigate(['admin']);
  }

  logOutAsUser(){
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}
