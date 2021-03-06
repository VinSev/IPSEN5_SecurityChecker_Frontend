import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsComponent } from "./tips.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('TipsComponent', () => {
  let component: TipsComponent;
  let fixture: ComponentFixture<TipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make connection', () => {
    expect((<any>component).subscription).toBeDefined();
  });
});
