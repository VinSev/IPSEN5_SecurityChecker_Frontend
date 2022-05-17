import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { ValidatieService } from '../shared/services/validatie.service';
import {UserScanService} from "../shared/services/user-scan.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public wrongSign: boolean = false;
  constructor(private router: Router,
              private userScanService: UserScanService,
              private validateService: ValidatieService) {}

  public submit(name: HTMLInputElement, email: HTMLInputElement, website: HTMLInputElement, ownership: HTMLInputElement, form: NgForm): boolean {
    for(let input of [name, email, website, ownership]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }

    this.userScanService.setScanInfo(website.value ,true, name.value, email.value);


    this.router.navigate(["scan"]);
    return true;
  }

  //Check if the given input is allowed in the given inputfield, if not let user know that this input is not allowed.
  CheckInputValidation(event: Event){
    this.wrongSign = false;
    if (!this.validateService.validateInputOfInputfield(event)){
      this.wrongSign = true;
    }
    // ??     this.wrongSign = !this.validateService.validateInputOfInputfield(event);
  }
}
