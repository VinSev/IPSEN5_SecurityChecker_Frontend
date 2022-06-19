import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ScanService} from "../scan/scan/scan.service";
import {environment} from "../../environments/environment";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public captcha: string;
  public captchaKey: string;

  constructor(private router: Router,
              private scanService: ScanService,
              private modalService: NgbModal) {

    this.captcha = "";
    this.captchaKey = environment.captchaKey;
  }

  public submit(name: HTMLInputElement, website: HTMLInputElement, ownership: HTMLInputElement, content?: any): boolean {
    for (let input of [name, website, ownership]) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    this.modalService.open(content)

    this.scanService.name = name.value;
    this.scanService.website = website.value;
    this.scanService.ownership = ownership.value == "on";

    return true;
  }



  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    this.modalService.dismissAll();
    this.scanService.startScan()
  }
}
