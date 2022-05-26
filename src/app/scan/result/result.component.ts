import { Component, OnInit } from '@angular/core';
import {ScanService} from "../scan/scan.service";
import {PdfService} from "../../shared/services/pdf.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(public scanService: ScanService,public pdfService: PdfService) { }

  ngOnInit(): void {
  }

  public sendPdfInfo(){
    this.pdfService.sendPdfData(this.scanService.scanCategories,this.scanService.name,this.scanService.website, this.scanService.email)
  }

}
