import {ScanUser} from "./scan-user.model";
import {ScanReport} from "./scan-report.model";

export class Report {
  constructor(public scanUser: ScanUser,
              public scanReports: ScanReport[],
              public dateCreated: string) {
  }
}
