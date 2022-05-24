import {Component, NgModule, OnInit} from '@angular/core';
import {ScanService} from "./scan.service";
import {ToastrService} from "ngx-toastr";
import {PdfService} from "../../shared/services/pdf.service";
import {Scan} from "../../shared/models/scan.model";
import {httpService} from "../../shared/requesten/htttp.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  public userScan: Scan = new Scan("", false);
  public result: any;

  constructor(public scanService: ScanService,
              private toastr: ToastrService,
              private pdfService: PdfService,
              private httpService: httpService) {

  }

  public ngOnInit() {
    this.makeResult();
    this.startScan();
  }

  private startScan(): void {
    this.scanService.start();
    this.userScan = this.scanService.getCurrentScan();
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
    this.scanService.sendMail();

    try {
      this.toastr.success("Resultaten verzonden", "", {
        tapToDismiss: true,
        positionClass: "toast-bottom-right",
        timeOut: 1500
      });
    } catch (ignore) {}

  }

  private makeResult(): void  {
    this.httpService.post<any>("/result/start", {
      url: this.scanService.getCurrentScan().website
    }).subscribe((result) => {
        // this.result = result;
      }
    );
  }
}
