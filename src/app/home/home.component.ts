import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ScanService} from "../scan/scan.service";
import {NgForm} from "@angular/forms";
import { ValidatieService } from '../shared/validatie.service';
import { homedir } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router,
              private scanService: ScanService,
              private validatieService: ValidatieService) {}

  public submit(name: HTMLInputElement, email: HTMLInputElement, website: HTMLInputElement, ownership: HTMLInputElement, form: NgForm): boolean {    
    for(let input of [name, email, website, ownership]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }

    this.scanService.name = name.value;
    this.scanService.email = email.value;
    this.scanService.website = website.value;
    this.scanService.ownership = ownership.value == "on";

    this.router.navigate(["scan"]);
    return true;
  }

  //Check if the given input is allowed in the given inputfield, if not let user know that this input is not allowed.
  CheckInputValidation(event: Event){
     if (!this.validatieService.validateInputOfInputfield(event)){
     }else{
       
     }
  }
}
