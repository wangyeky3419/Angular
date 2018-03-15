import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'child-three',
  	templateUrl: './child-three.component.html',
  	styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {
	@Output()//此修饰符可以不用,但是写上后，下面紧跟着constructor会报错
	public say:EventEmitter<any>=new EventEmitter<any>();
  	ngOnInit() {
  	}
  	constructor() { }
  	
  	public sayHello():void{
  		//利用事件派发器派发一个事件
  		this.say.emit('我是派发出的字符串');
  	}
}
