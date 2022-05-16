import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from "./result.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ScanModule} from "../scan.module";

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ],
      imports: [ HttpClientTestingModule, ScanModule ]
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
