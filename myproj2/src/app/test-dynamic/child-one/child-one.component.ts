import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'child-one',
  	templateUrl: './child-one.component.html',
  	styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
	public title:string = '默认的标题';
  	constructor() { }

  	ngOnInit() {
  	}

  	@Output()
  	//子组件事件派发器，父组件那获得
  	public myEvent:EventEmitter<string>=new EventEmitter<string>();
  	public sayHello():void{
  		this.myEvent.emit("子组件触发的事件");//利用事件派发器将字符串派发出去
  	}

}
