import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScanlimitComponent } from './admin-scanlimit.component';

describe('AdminScanlimitComponent', () => {
  let component: AdminScanlimitComponent;
  let fixture: ComponentFixture<AdminScanlimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScanlimitComponent ]
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
