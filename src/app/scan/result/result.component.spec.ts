import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from "./result.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ScanModule} from "../scan.module";
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
