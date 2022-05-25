import { Component, OnInit, NgModule } from '@angular/core';
import { authenticationService } from '../shared/services/authentication.Service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{

  constructor(private auth : authenticationService) { }

  ngOnInit(): void {
  }

  public submit(email: HTMLInputElement, password: HTMLInputElement): boolean {
    for(let input of [email, password]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    this.auth.authenticate(email.value, password.value)
    return true;
  }

}
