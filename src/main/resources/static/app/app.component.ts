import { Component} from '@angular/core';
import { Router, CanActivate } from "@angular/router";

@Component({
  selector: 'kisai',
  template: `
  <router-outlet></router-outlet>
  `
})

export class AppComponent { 
  constructor(public router: Router) {}
}
