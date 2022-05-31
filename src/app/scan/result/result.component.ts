import { Component, OnInit } from '@angular/core';
import {ScanService} from "../../shared/services/scan.service";

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
