import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ScanService} from "../scan/scan/scan.service";
import {NgForm} from "@angular/forms";
import {ValidationService} from "../shared/services/validation.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public wrongSign: boolean = false;
  constructor(private router: Router,
              private scanService: ScanService,
              private validatieService: ValidationService) {}

  public submit(name: HTMLInputElement, website: HTMLInputElement, ownership: HTMLInputElement): boolean {
    for(let input of [name, website, ownership]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }

    this.scanService.name = name.value;
    this.scanService.website = website.value;
    this.scanService.ownership = ownership.value == "on";

    this.scanService.postUserValidatieToDatabase()
    return true;
  }

  public CheckInputValidation(event: Event){
    this.wrongSign = !this.validatieService.validateInput(event);
  }
}
