import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'test-ng-class',
  	templateUrl: './test-ng-class.component.html',
  	styleUrls: ['./test-ng-class.component.css']
})
export class TestNgClassComponent implements OnInit {
	public currentClasses:{};
	public canSave:boolean = true;
	public isUnchanged:boolean = true;
	public isSpecial:boolean = true;
  	constructor() { }

  	ngOnInit() {
  	}
  	setCurrentClass(){
  		this.currentClasses = {
  		//类样式，可以是对象，当对象中的值为true时样式设置成功
  			'saveable':this.canSave,
  			'modified':this.isUnchanged,
  			'special':this.isSpecial
  		}
  	}

}
