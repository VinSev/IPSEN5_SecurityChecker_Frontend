export class ScanReport {
  public loading: boolean = false;

  constructor(public title: string,
              public endpoint: string,
              public grade?: number,
              public result?: JSON) {
  }
}

