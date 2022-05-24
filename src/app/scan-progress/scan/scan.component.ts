import {Component, OnInit} from '@angular/core';
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

  public mailResults(): void {
    this.toastr.success("Resultaten verzonden", "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-right",
      timeOut: 1500
    });
    this.pdfService.generatePDF(this.scanService.getCurrentScan().scanCategories, this.scanService.getCurrentScan().name, this.scanService.getCurrentScan().website);
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
