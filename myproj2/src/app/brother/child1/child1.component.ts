import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  	selector: 'child1',
  	templateUrl: './child1.component.html',
  	styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
	//注入事件总线
  	constructor(public eventBusService:EventBusService) { }//将事件总线对象赋值给eventBusService变量
    public obj = {"name":"张三"};
  	ngOnInit() {
  	}
  	public triggerEventBus():void{
        //this.eventBusService.eventBus.next("第一个组件触发的事件");
  		  this.eventBusService.eventBus.next(JSON.stringify(this.obj));
        //调用事件总线里面的eventBus方法里面的next,传入参数值
  	}

}
