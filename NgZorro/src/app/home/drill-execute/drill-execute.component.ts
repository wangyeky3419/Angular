import { Component, OnInit, ViewChild } from '@angular/core';
import { ExecuteChild1Component } from './execute-child1/execute-child1.component';

//引入common内组件
import { ZorroPracticeComponent } from '../../common/zorro-practice/zorro-practice.component';
import { ZorroPrac2Component } from '../../common/zorro-prac2/zorro-prac2.component';
//引入公共组件
import { InfoComponent } from '../../common/info/info.component';

@Component({
    selector: 'app-drill-execute',
    templateUrl: './drill-execute.component.html',
    styleUrls: ['./drill-execute.component.css']
})
export class DrillExecuteComponent implements OnInit {
    //4.将取到的值赋值给私有变量
//父---------子   top
    constructor() { }
    textValue = '你好。我来自父亲'
    textValue2 = '你好。我来自父亲2'
    fatherCount = 100;
    ngOnInit() {
        //子---父部分   利用私有变量调用方法，将子组件里面的属性值赋值123
        this.childComponent.childFn(123);
        console.log(this.childComponent.childText)
    }
    setValue(e){
        console.log(e)
    }
//父---------子   end

//子-------------父  top
    //利用ViewChild取到子组件
	@ViewChild(ZorroPracticeComponent)
	//将取到的值赋值给私有变量
    private childComponent:ZorroPracticeComponent;
    ngAfterViewInit(){//视图初始化完成后就调用
        //也可以调用里面的属性,但是私有属性用不了
    }
    public fatherFn(childVal):void{//childVal为子组件属性值
        console.log('收到了子组件自定义事件=='+childVal)
    }
//子-------------父  end
}
