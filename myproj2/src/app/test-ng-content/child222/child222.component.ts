import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'child222',
  	templateUrl: './child222.component.html',
  	styleUrls: ['./child222.component.css']
})
export class Child222Component implements OnInit {

  	constructor() { }

 	 ngOnInit() {
  	}
  	ngAfterContentInit(){//在这里可以修改input等的一些属性，
  		//但是当view钩子执行完毕后就不能改了，因为已经装配完了，
  		//如果一定要在装配完修改，可以利用脏检查或变更检测来修改
  		console.log("子组件ngAfterContentInit-----");
  	}
  	ngAfterContentChecked(){
  		console.log("子组件ngAfterContentChecked-----")
  	}

}
