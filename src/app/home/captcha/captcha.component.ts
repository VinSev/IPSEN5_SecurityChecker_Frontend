import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {
  public captcha: string;
  public captchaKey: string;

  constructor() {
    this.captcha = "";
    this.captchaKey = environment.captchaKey;
  }

  ngOnInit(): void {
  }

  resolved($event: string) {

  }
}
