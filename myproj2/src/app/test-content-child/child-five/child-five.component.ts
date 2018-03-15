import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'child-five',
  	templateUrl: './child-five.component.html',
  	styleUrls: ['./child-five.component.scss']
})
export class ChildFiveComponent implements OnInit {

	@Output()//向外派事件必须写output
	public myEvent:EventEmitter<string> = new EventEmitter<string>();
	public title:string="我是组件5，被投影的";
  	constructor() { }

	ngOnInit() {
  	}
  	public say():void{
  		this.myEvent.emit('我是组件5派发出来的事件');
  	} 
  	public test():void{
  		console.log('组件4调用组件5里的方法')
  	}
}
