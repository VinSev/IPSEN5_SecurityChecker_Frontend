import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HomeModule} from "./home.module";
import {FormsModule} from "@angular/forms";
import {ElementRef} from "@angular/core";
import {CaptchaComponent} from "./captcha/captcha.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false if inputs are empty', () => {
    let name: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let website: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let ownership: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let content: CaptchaComponent = new CaptchaComponent()
    name.required = true;
    website.required = true;
    ownership.required = true;
    expect(component.submit(name, website, ownership, content)).toBeFalse();
  });

  it('should return true if mail is filled', () => {
    let name: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let website: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let ownership: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let content: CaptchaComponent = new CaptchaComponent()
    name.value = "test";
    website.value = "test";
    ownership.value = "on"
    expect(component.submit(name, website, ownership, content)).toBeTrue();
  });

  it('should store values', () => {
    let name: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let website: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let ownership: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let content: ElementRef = new ElementRef<any>(null);
    name.value = "test";
    website.value = "test";
    ownership.value = "on"
    component.submit(name, website, ownership, content);
    expect((<any>component).scanService.name).toEqual("test");
    expect((<any>component).scanService.website).toEqual("test");
    expect((<any>component).scanService.ownership).toEqual(true);
  });
});
