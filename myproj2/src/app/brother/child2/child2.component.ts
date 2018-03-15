import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';
//使用动效，引入我们自己书写的动效组件
import { flyIn } from '../../animation/fly-in';
@Component({
  	selector: 'child2',
  	templateUrl: './child2.component.html',
  	styleUrls: ['./child2.component.css'],
    animations:[flyIn]//配置
})
export class Child2Component implements OnInit {
	public events:Array<any>=[];
	//注入事件总线
    public state = 'inactive'
  	constructor(public eventBusService:EventBusService) { }//将事件总线对象赋值给eventBusService变量

  	ngOnInit() {
  		//订阅了事件总线上面的eventBus
  		this.eventBusService.eventBus.subscribe((value)=>{
        //console.log(value);//child1里面next方法传入的值
  			this.events.push(JSON.parse(value).name+"--"+new Date());
  		})
  	}
    public toggle():void{
      this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
