import { Component } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(public router: Router) {
  }
}
