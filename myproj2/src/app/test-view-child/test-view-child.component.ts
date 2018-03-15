import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildFiveComponent } from '../test-content-child/child-five/child-five.component'
@Component({
  	selector: 'test-view-child',
  	templateUrl: './test-view-child.component.html',
  	styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements OnInit {
	//@ViewChild(ChildFiveComponent)
	//childFive:ChildFiveComponent;
	
	//多个组件时
	@ViewChildren(ChildFiveComponent)
	childFiveList:QueryList<ChildFiveComponent>;
  	constructor() { }
	
  	ngOnInit() {
  	}
  	ngAfterViewInit(){
  		//console.log(this.childFive)//打印出来了组件5里面的对象（内容）
  		//this.childFive.title = '12';//也可以进行赋值
  		//但是修改那些@input属性会报错，如果想修改，启动一个定时器setTimeOut来做
  		this.childFiveList.forEach((item)=>{
  			console.log(item);
  		})
  	}
}
