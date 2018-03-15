import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  //title = 'app';
  constructor(
        public router:Router
    ) {
    }
  jump(){
  	console.log(12)
  	this.router.navigate(['home2'])
  }
  
}
