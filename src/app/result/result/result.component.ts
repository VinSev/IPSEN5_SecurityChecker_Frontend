import { Component, OnInit } from '@angular/core';
import {ScanService} from "../../scan-progress/scan/scan.service";
import {ResultType} from "../../shared/models/result.type";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public _results: ResultType[] = []

  constructor(public scanService: ScanService) { }

  ngOnInit(): void {
    this._results.push({title:"headers",path:"yoyo",loading:true,grade: 8,result:true})
    this._results.push({title:"Cross-side scripting",path:"yoyo",loading:true,grade: 3,result:true})
    this._results.push({title:"SQL-injection",path:"yoyo",loading:true,grade: 8,result:true})

  }

}
