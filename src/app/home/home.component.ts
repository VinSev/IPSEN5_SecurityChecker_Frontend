import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ScanService} from "../scan/scan.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router,
              private scanService: ScanService) {
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
  keyPressAlphabet(event: any){
    var inp = String.fromCharCode(event.keyCode);
    
    //Name input
    var mask = /[a-zA-ZáéóúíÁÉÓÚÍäëöüïÄËÖÜÏ-]/
    //Phone input
    var mask = /[0-9+]/
    //Email input
    var mask = /[a-zA-Z0-9áéóúíÁÉÓÚÍäëöüïÄËÖÜÏ+_~@-]/

    if(mask.test(inp)){
      return true;
    } else {
      event?.preventDefault();
      return false;
    }
  }
}
