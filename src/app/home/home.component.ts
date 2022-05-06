import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ScanService} from "../scan/scan.service";
import {NgForm} from "@angular/forms";
import { ValidatieService } from '../shared/validatie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router,
              private scanService: ScanService,
              private validatieService: ValidatieService) {
  }

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

  //Preventing placing anything but alfabetic key types plus the minus (-) for names using -
  keyPressAlphabet(event: Event){
    //check type of event
    const target = event.target as HTMLInputElement;
    console.log(target.type);
    
    //create mask
    switch((event.target as HTMLInputElement).type){
      case "text":
        //Name input
        var mask = /[a-zA-ZáéóúíÁÉÓÚÍäëöüïÄËÖÜÏ-]/
        break;
      case "tell":
        //Phone input
        var mask = /[0-9+]/
        break;
      default:
        //Email input
        var mask = /[a-zA-Z0-9áéóúíÁÉÓÚÍäëöüïÄËÖÜÏ+_~@-]/
        break;
    }

      this.validatieService.validateInputOfInputfield(event, mask);
    
  }
}
