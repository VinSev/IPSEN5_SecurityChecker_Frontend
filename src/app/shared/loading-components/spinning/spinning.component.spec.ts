import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SpinningComponent} from "./spinning.component";
import {SharedModule} from "../../shared.module";

describe('SpinningComponent', () => {
  let component: SpinningComponent;
  let fixture: ComponentFixture<SpinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinningComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
