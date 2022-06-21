import { reportService } from "./report.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import { Report } from "src/app/shared/models/report.model";
import { ScanUser } from "src/app/shared/models/scan-user.model";
import { ScanReport } from "src/app/shared/models/scan-report.model";

describe('raportService', () => {
  let service: reportService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule ],
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(reportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change currentViewed Rapport to the selected raport', () => {
    let scanUser = new ScanUser();
    let scanRaport: ScanReport[] = [];
    let raport = new Report(scanUser,scanRaport,'22-06-22')

    service.changeCurrentViewedRapport(raport);
    expect(service.currentViewedRapport).toEqual(raport);
  });
});
