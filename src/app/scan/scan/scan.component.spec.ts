import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanComponent } from './scan.component';

describe('ScanComponent', () => {
  let component: ScanComponent;
  let fixture: ComponentFixture<ScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false if mail is empty', () => {
    expect(component.submit(new HTMLInputElement())).toBeFalse();
  });

  it('should return true if mail is filled', () => {
    let inputElement: HTMLInputElement = new HTMLInputElement();
    inputElement.value = "hello@gmail.com";
    expect(component.submit(inputElement)).toBeTrue();
  });

  it('should start scan', () => {
    component.ngOnInit();
    expect(component.scanService.scanCategories[0].loading).toBeTrue();
  });
});
