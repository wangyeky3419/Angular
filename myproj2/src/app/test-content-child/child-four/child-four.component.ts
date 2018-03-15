import { Component, OnInit, ContentChild } from '@angular/core';

//要想操作先引用
import { ChildFiveComponent } from '../child-five/child-five.component'
@Component({
  	selector: 'child-four',
  	templateUrl: './child-four.component.html',
  	styleUrls: ['./child-four.component.scss']
})
export class ChildFourComponent implements OnInit {
	@ContentChild(ChildFiveComponent)//利用这个装饰器操作投影进来的组件
	childFive:ChildFiveComponent;
  	constructor() { }

  	ngOnInit() {
  	}
  	ngAfterContentInit(){
  		console.log(this.childFive.title);//打印组件5里面的值
  		//这里面可以对组件5里面改值，在view钩子里面就不可以了
  		this.childFive.myEvent.subscribe((data)=>{
  			console.log(data)//将从组件五里的打印出来
  		})
  	}
  	public test2():void{
  		this.childFive.test()
  	}
}
