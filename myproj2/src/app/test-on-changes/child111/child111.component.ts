import { Component, OnInit, Input } from '@angular/core';

@Component({
  	selector: 'child111',
  	templateUrl: './child111.component.html',
  	styleUrls: ['./child111.component.css']
  	
})
export class Child111Component implements OnInit {
	public exitVal = '子组件值';
	@Input()
	public userName1:string="";
	//string类型的值改变了会调用ngOnChanges事件，
	//因为该类型的值当发生改变的时候，不是去把原
	//先的值做替换，而是新建一个内存存储
  	constructor() { }
  	@Input()
  	//object类型的值改变了不会触发ngOnChanges事件，因为当里面
  	//的值改变的时候，并没有另开空间，而是在原空间更改的，
  	//但是他会触发另外一个钩子，ngDoCheck
  	
  	//=======================
  	//而且当某个值改变调用ngOnChanges或ngDoCheck后，会导致组件树上的所有组件都会调用一遍这个事件
  	//解决办法是设置成onPush,见上面代码
  	//=======================
  	
  	public userObject1:any={};
  	ngOnInit() {
  	}
  	ngOnChanges(){
  		console.log('子组件的ngOnChanges执行了')
  	}
  	ngDoCheck(){
  		//如外面的时间在变，每一次都会调用一次
  		//不要在这里面做损耗性能的事，会卡死的
  		console.log('子组件的ngDoCheck执行了')
  	}
  	ngAfterViewInit(){//初始化完组件视图及其子视图之后调用。只执行一次
  		//this.userName1 = 'new user';//会抛出异常
  		// ExpressionChangedAfterItHasBeenCheckedError: 
  		// Expression has changed after it was checked. Previous value: ''. Current value: 'new user'.
  		// 意思就是当视图装配完成后，input里的参数不能再变了
  	}
  	ngAfterViewChecked(){//每次做完组件视图和子视图的变更检测之后调用。
  		//this.userName1 = 'new user';//会抛出异常,同上
  	}
  	//上面两个钩子，在组件视图装配的时候调用这两个钩子，
  	//视图的装配过程是从   子组件--->父组件依次进行的，
  	//在这两个钩子里面不能修改组件上被绑定的属性，否则会抛出异常
  	//ngAfterViewChecked可能会被调用非常多次，如果没有使用OnPush策略，
  	//所有实现了这个钩子的组件都会被调用，千万不要在这个钩子里做很复杂的事。会卡死
  	//所以只能做一些简单的赋值取值操作

}
