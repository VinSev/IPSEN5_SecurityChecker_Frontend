import {Component, OnInit} from '@angular/core';
import {ScanService} from "../../shared/services/scan.service";
import {ToastrService} from "ngx-toastr";
import {Scan} from "../../shared/models/scan.model";

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
              ) {

  }

  public ngOnInit() {
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

}
