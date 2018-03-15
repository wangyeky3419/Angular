import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  	selector: 'test-dynamic',
  	templateUrl: './test-dynamic.component.html',
  	styleUrls: ['./test-dynamic.component.css']
})
export class TestDynamicComponent implements OnInit {
	@ViewChild("dycontainer",{read:ViewContainerRef})
	dycontainer:ViewContainerRef;
	public head:string = '默认值'
	comp1:ComponentRef<ChildOneComponent>;//声明一个变量，类型为ChildOneComponent类型
	comp2:ComponentRef<ChildOneComponent>;
	comp3:ComponentRef<ChildOneComponent>;
	//在构造器里面定义私有变量
  	constructor(private resolver:ComponentFactoryResolver) { }

  	ngOnInit() {
  	}
  	ngAfterContentInit(){
  		//这个时候模板还没有装配完，前面说过在这里可以对一些参数值进行修改
  		//到ngAfterViewChecked的时候视图已经装配完成
  		//这个钩子只执行一次
  		
  		//动态创建组件的实例
  		//下面这行代码可以看成是一个工厂方法，把ChildOneComponent这个类反射的工厂方法上
  		const childComp = this.resolver.resolveComponentFactory(ChildOneComponent)
  		//利用这个方法（函数）就可以创建这个组件实例了
  		this.comp1 = this.dycontainer.createComponent(childComp);
  		
  		//利用内置的createComponent就可以在dycontainer这个容器下创建一个childComp组件实例了
  		this.comp1.instance.title = '父组件动态赋值的标题';//为动态创建的子组件传值，动态创建的不能用input传值
  		
  		//接收子组件派发出来的数据
  		this.comp1.instance.myEvent.subscribe((data)=>{
  			this.head = data
  			console.log(data);
  		})

  		
  		this.comp2 = this.dycontainer.createComponent(childComp,0);//第二个参数就是组件的位置
  		this.comp2.instance.title = '第二个组件'
  		this.comp3 = this.dycontainer.createComponent(childComp,1);
  		this.comp3.instance.title = '第三个组件'
  	}
  	public delComp():void {
  		//销毁组件
  		this.comp1.destroy();
  	}

}
