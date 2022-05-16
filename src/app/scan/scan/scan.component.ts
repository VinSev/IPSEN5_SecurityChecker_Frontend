import {Component, NgModule, OnInit} from '@angular/core';
import {ScanService} from "./scan.service";
import {ToastrService} from "ngx-toastr";
import {PdfService} from "../../shared/services/pdf.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  constructor(public scanService: ScanService,
              public toastr: ToastrService,
              public pdfService: PdfService) {
  }

  public ngOnInit() {
    this.startScan();
  }

  private startScan(): void {
    this.scanService.start();
  }

  public submit(email: HTMLInputElement): boolean {
    for(let input of [email]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }

    this.mailResults();
    return true;
  }

  public mailResults(): void {
    try {
      this.toastr.success("Resultaten verzonden", "", {
        tapToDismiss: true,
        positionClass: "toast-bottom-right",
        timeOut: 1500
      });
    } catch (ignore) {}
    //TODO:
    // - Should send request to API to send mail to user;

    // this.pdfService.generatePDF(this.scanService.scanCategories, this.scanService.name, this.scanService.website);
  }

}
