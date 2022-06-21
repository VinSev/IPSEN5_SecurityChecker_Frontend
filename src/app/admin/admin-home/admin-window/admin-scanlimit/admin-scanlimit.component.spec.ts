import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScanlimitComponent } from './admin-scanlimit.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {HttpService} from "../../../../shared/services/http.service";
import {FormsModule} from "@angular/forms";

describe('AdminScanlimitComponent', () => {
  let component: AdminScanlimitComponent;
  let fixture: ComponentFixture<AdminScanlimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScanlimitComponent ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScanlimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
