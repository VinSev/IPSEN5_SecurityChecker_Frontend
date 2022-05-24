import {Component} from '@angular/core';
import {ScanService} from "../scan/scan/scan.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private scanService: ScanService) {}

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

    this.scanService.postUserValidationToDatabase()
    return true;
  }
}
