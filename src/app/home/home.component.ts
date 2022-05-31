import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserScanService} from "../shared/services/user-scan.service";
import {ScanService} from "../shared/services/scan.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router,
              private userScanService: UserScanService,
              private scanService: ScanService) {}

  public submit(name: HTMLInputElement, website: HTMLInputElement, ownership: HTMLInputElement): boolean {
    for(let input of [ name, website, ownership]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    this.userScanService.setScanInfo(website.value ,true, name.value);

    this.scanService.postUserValidationToDatabase()
    return true;
  }
}
