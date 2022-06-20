import { TestBed } from '@angular/core/testing';

import { ScanService } from "./scan.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('ScanService', () => {
  let service: ScanService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter website url',  () => {
    service.website = "https://www.google.com/?gws_rd=ssl";
    (<any>service).filterWebsite();
    expect(service.website).toEqual("www.google.com");
  });


});
