import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'template-interpolation',
  	templateUrl: './template-interpolation.component.html',
  	styleUrls: ['./template-interpolation.component.css']
})
export class TemplateInterpolationComponent implements OnInit {
	public title:string = "你好";
  	constructor() { }
  	getVal(){
  		return "方法返回值"
  	}
  	ngOnInit() {
  	}

}
