import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { NzInputDirectiveComponent } from '../../../components/input/nz-input.directive.component';
@Component({
    selector: 'app-zorro-practice',
    templateUrl: './zorro-practice.component.html',
    styleUrls: ['./zorro-practice.component.css']
})
export class ZorroPracticeComponent implements OnInit {
    tags = ['name','age']
    constructor() { }
//====父------->子  组件间值传递 top
    private _childTitle:string="我是子组件值";
    private _childTitle2:string="我是子组件值";
    //父---子传递
	@Input()
    set childTitle(fatherTitle:string){
		this._childTitle = "【"+fatherTitle+"】";//用子组件里面的_childTitle接收父组件传递来的参数
	}
	//再通过get方法返回出去
	get childTitle():string{
		return this._childTitle;
    }
//=============================================
    //父---子传递(input)
    private _inputValue:string="我是子input值";
	@Input()
    set inputValue(inputValue:string){
		this._inputValue = "【"+inputValue+"】";
	}
	//再通过get方法返回出去
	get inputValue():string{
		return this._inputValue;
    }

    @Input()
    count: number = 0;
    ngOnInit() {
        console.log("将父组件里面的属性值传递过来",this.count)
        console.log('我是子组件值，初始化前被父组件改变了',this.count2)
    }
    setValue2(value2){
        console.log('我在子组件，输出的是父组件input输入值',value2)
    }
//====父------->子  组件间值传递 end

//====子------->父  组件间值传递 top
    //子--父传递
	@Output()
	//事件派发器
    //子组件是通过派发事件的方式跟父组件进行交互的
    public follow = new EventEmitter<string>();
    public emitAnEvent():void{
		this.follow.emit("follow");//触发一个事件出来，事件名字叫follow（括号里面的），利用follow去调用父组件里面的事件
    }
    count2 = 0;
    childText = '子子子子吱吱吱吱'
    childFn(count){
        this.count2 = count
    }
//====子------->父  组件间值传递 end
   

}
