import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-content222',
  templateUrl: './test-ng-content222.component.html',
  styleUrls: ['./test-ng-content222.component.scss']
})
export class TestNgContent222Component implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}
  	public doSomething(data){
  		console.log(data);//从子组件2里的投影的组件3传过来的值
  	}

}
