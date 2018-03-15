import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'test-ng-content',
  	templateUrl: './test-ng-content.component.html',
  	styleUrls: ['./test-ng-content.component.scss']
})
export class TestNgContentComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}
  	ngAfterContentInit(){
  		console.log("父组件ngAfterContentInit++++++");
  	}
  	ngAfterContentChecked(){
  		console.log("父组件ngAfterContentChecked+++++")
  	}

}
