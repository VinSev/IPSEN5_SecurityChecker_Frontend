import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScanresultComponent } from './admin-scanresult.component';

describe('AdminScanresultComponent', () => {
  let component: AdminScanresultComponent;
  let fixture: ComponentFixture<AdminScanresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScanresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScanresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
