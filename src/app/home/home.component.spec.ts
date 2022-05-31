import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< Temporary merge branch 1
import { HomeComponent } from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule,HomeRoutingModule, HttpClientTestingModule, FormsModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
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
    name.required = true;
    website.required = true;
    ownership.required = true;
    expect(component.submit(name, website, ownership, null)).toBeFalse();
  });

  it('should return true if inputs are filled', () => {
    let name: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let website: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let ownership: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let content: any = document.getElementById("content");
    name.value = "test";
    website.value = "test";
    ownership.value = "on"
    expect(component.submit(name, website, ownership, content)).toBeTrue();
  });

  it('should store values', () => {
    let name: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let website: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let ownership: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let content: any = document.getElementById("content");
    name.value = "test";
    website.value = "test";
    ownership.value = "on"
    component.submit(name, website, ownership, content);
    expect((<any>component).scanService.name).toEqual("test");
    expect((<any>component).scanService.website).toEqual("test");
    expect((<any>component).scanService.ownership).toEqual(true);
  });
});
