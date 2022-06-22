import {ScanAlert} from "./scan-alert.model";

export class ScanReport {
  public loading: boolean = false;

  constructor(public title: string,
              public endpoint: string,
              public result: ScanAlert[],
              public grade?: number,
              public id?: number) {
  }
}

