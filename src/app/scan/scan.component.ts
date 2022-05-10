import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScanService} from "./scan.service";
import {ToastrService} from "ngx-toastr";
import {PdfService} from "../pdf/pdf.service";
import {FunFactsService} from "./fun-facts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public funFacts: string[] = [];

  constructor(public scanService: ScanService,
              private toastr: ToastrService,
              private pdfService: PdfService,
              private funFactsService: FunFactsService) {
  }

  public ngOnInit() {
    this.startScan();
    this.subscription = this.funFactsService.get()
      .subscribe(response => {
        this.funFacts = response;
      });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private startScan(): void {
    this.scanService.start();
  }

  public mailResults(): void {
    this.toastr.success("Resultaten verzonden", "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-right",
      timeOut: 1500
    });
    this.pdfService.generatePDF(this.scanService.scanCategories, this.scanService.name, this.scanService.website);
  }

}
