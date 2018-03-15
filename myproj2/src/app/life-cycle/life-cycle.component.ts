import { Component, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  	selector: 'life-cycle',
  	templateUrl: './life-cycle.component.html',
  	styleUrls: ['./life-cycle.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush//定义脏检查策略，这样别的组件调用onchange后其本组件不会受到影响
})
export class LifeCycleComponent {
	public logs:Array<any>=[];
	@Input()
	public title:string=""; 
  	constructor() {
  		this.logs.push("constructor...")
  	}

  	ngOnInit() {//在第一轮ngOnChanges()完成之后调用，只调用一次
  		this.logs.push("ngOnInit...");
  	}
  	ngOnChanges(){//@Input属性发生变化的时候调用，非@Input时不调用
  		this.logs.push("ngOnChanges...");
  	}
    ngDoCheck(){
      this.logs.push('ngDocheck...')
    }
  	/*
  	
  	ngAfterContentInit(){
  		this.logs.push('ngAfterContentInit...')
  	}
  	ngAfterContentChecked(){
  		this.logs.push('ngAfterContentChecked...')
  	}
  	ngAfterViewInit(){
  		this.logs.push('ngAfterViewInit...')
  	}
  	ngAfterViewChecked(){
  		this.logs.push('ngAfterViewChecked...')
  	}
  	 
  	ngOnDestroy(){
  		this.logs.push('ngOnDestory...')
  	}*/


}
