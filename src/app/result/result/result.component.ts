import { Component, OnInit } from '@angular/core';
import {ScanService} from "../../scan-progress/scan/scan.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(public scanService: ScanService) { }

  ngOnInit(): void {
  }

}
