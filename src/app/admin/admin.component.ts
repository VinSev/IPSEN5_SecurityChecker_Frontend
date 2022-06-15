import { Component} from '@angular/core';
import { authenticationService } from '../shared/services/authentication.Service';
import {environment} from "../../environments/environment";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{

  public adminCaptcha: string;
  public adminCaptchaKey: string;
  public inputValid: boolean;

  constructor(private auth : authenticationService,
              private modalService: NgbModal) {

    this.adminCaptcha = "";
    this.adminCaptchaKey = environment.captchaKey;
    this.inputValid = false
  }

  ngOnInit(): void {
  }

  public submit(email: HTMLInputElement, password: HTMLInputElement, content?: any): boolean {
    for(let input of [email, password]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    this.inputValid = true;

    this.modalService.open(content)

    return true;
  }


  resolved(captchaResponse: string, email: HTMLInputElement, password: HTMLInputElement){
    this.adminCaptcha = captchaResponse;
    this.modalService.dismissAll();
    this.auth.authenticate(email.value, password.value)
  }
}
