import { Component, OnInit,ViewChild } from '@angular/core';
import { Child111Component } from './child111/child111.component'
@Component({
  	selector: 'test-on-changes',
  	templateUrl: './test-on-changes.component.html',
  	styleUrls: ['./test-on-changes.component.css']
})
export class TestOnChangesComponent implements OnInit {
	@ViewChild("child11")
	child11:Child111Component
	public userName:string="";
  	public userObject:any={};


  	public exitVal:string="123";
  	constructor() { }

  	ngOnInit() {
  		//获取子组件里面的值赋值给父组件的exitVal
  		this.exitVal = this.child11.exitVal;
  	}

}
