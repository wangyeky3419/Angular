import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
//（组件中）调用子组件中的方法，不同于模板中直接用组件名.方法   调用
//1.先引入ViewChild
//2.引用子组件
import { ChildComponent } from './child/child.component'
@Component({
  	selector: 'parent-and-child',
  	templateUrl: './parent-and-child.component.html',
  	styleUrls: ['./parent-and-child.component.css']
})
export class ParentAndChildComponent implements OnInit {
	//3.利用ViewChild取到子组件
	@ViewChild(ChildComponent)
	//4.将取到的值赋值给私有变量
	private childComponent:ChildComponent;

  	constructor() { }
  	ngAfterViewInit(){//视图初始化完成后就调用
  		//4.利用私有变量调用方法
  		//this.childComponent.childFn();
  		//alert(this.childComponent.panelTitle)//也可以调用里面的属性,但是_panelTitle为私有属性用不了
  	}
  	public doSomething(childVal):void{//childVal为子组件属性值
  		alert('收到了子组件自定义事件'+childVal)
  	}
  	ngOnInit() {
  	}

}
