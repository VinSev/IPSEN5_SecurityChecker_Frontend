
import { raportService } from "./raport.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import { Report } from "src/app/shared/models/report.model";
import { ScanUser } from "src/app/shared/models/scan-user.model";
import { ScanReport } from "src/app/shared/models/scan-report.model";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {HttpService} from "../../../../../shared/services/http.service";

describe('raportService', () => {

  let service: raportService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule ],
      providers: [{provide: ToastrService, useClass: ToastrModule}, HttpService]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(raportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change currentViewed Rapport to the selected raport', () => {
    let scanUser = new ScanUser();
    let scanRaport: ScanReport[] = [];

    let raport = new Report(scanUser,scanRaport,'')

    service.changeCurrentViewedRapport(raport);
    expect(service.currentViewedRapport).toEqual(raport);
  });
});
