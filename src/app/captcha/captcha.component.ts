import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleAuthToken(token){
    console.log('auth token received: %o', token);
  }
}
