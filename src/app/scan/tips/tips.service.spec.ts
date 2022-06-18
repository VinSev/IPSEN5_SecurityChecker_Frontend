import { TestBed } from '@angular/core/testing';

import { TipsService } from './tips.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('TipsService', () => {
  let service: TipsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
