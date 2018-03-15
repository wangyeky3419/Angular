import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.css']
})
export class TestNgStyleComponent implements OnInit {

  	public currentStyles:{};
	public canSave:boolean = true;
	public isUnchanged:boolean = true;
	public isSpecial:boolean = true;
  	constructor() { }

  	ngOnInit() {
  	}
  	modCurrentClass(){
  		this.canSave=!this.canSave
  		this.currentStyles = {
  		//类样式，可以是对象，当对象中的值为true时样式设置成功
  			'font-style':this.canSave?'italic':'normal',
  			'font-weight':this.isUnchanged?'bold':'normal',
  			'font-size':this.isSpecial?'24px':'12px'
  		}
  	}

}
