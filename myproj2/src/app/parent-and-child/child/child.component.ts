import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'child',
  	templateUrl: './child.component.html',
  	styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	private _panelTitle:string="我是子组件的值";
	//父---子传递
	@Input()
	//当外部父组件传来一个panelTitle参数时，
	//这里通过set方法来拦截一下，然后将值处理一下
	set panelTitle(panelTitle:string){
		this._panelTitle = "【"+panelTitle+"】";//用子组件里面的_panelTitle接收父组件传递来的参数
	}
	//再通过get方法返回出去
	get panelTitle():string{
		return this._panelTitle;
	}

	//子--父传递
	@Output()
	//事件派发器
	//子组件是通过派发事件的方式跟父组件进行交互的
	public follow = new EventEmitter<string>();

	public emitAnEvent():void{
		this.follow.emit("follow");//触发一个事件出来，事件名字叫follow（括号里面的），利用follow去调用父组件里面的事件
	}
	public childFn():void{
		alert("父组件调用子组件方法");
	}
  	constructor() { }

  	ngOnInit() {
		

  	}

}
