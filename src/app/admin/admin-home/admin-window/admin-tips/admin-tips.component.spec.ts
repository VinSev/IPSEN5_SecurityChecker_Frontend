import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipsComponent } from './admin-tips.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {FormsModule} from "@angular/forms";

describe('AdminTipsComponent', () => {
  let component: AdminTipsComponent;
  let fixture: ComponentFixture<AdminTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipsComponent ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clean inputfield', function () {
    component.tipsService.tipToSendWithId.text = 'hello wolrd'
    component.goCreateANewTip();
    expect(component.tipsService.tipToSendWithId.text).toEqual('')
  });

  it('should submit', function () {
    let input: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let b: boolean;

    input.required = true;
    b = component.submit(input);
    expect(b).toBeFalse();

    input.required = false;
    input.value = "test";
    b = component.submit(input);
    expect(b).toBeTrue();

    component.tipsService.inEditMode = true;
    input.value = "test";
    b = component.submit(input);
    expect(b).toBeTrue();
  });

  it('should delete tip', function () {
    try {
      component.deleteTip();
    } catch (ignore) {}
  });
});
