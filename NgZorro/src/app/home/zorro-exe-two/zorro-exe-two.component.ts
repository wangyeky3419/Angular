import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-zorro-exe-two',
    templateUrl: './zorro-exe-two.component.html',
    styleUrls: ['./zorro-exe-two.component.css']
})
export class ZorroExeTwoComponent implements OnInit {
    // 走马灯 top
    array = [ 'one', 'two', 'three' ];
    nzBeforeChange(){//切换面板前
        console.log('切换前');
    }
    nzAfterChange(){//切换面板后
        console.log('切换后')
    }
    nzSlickNext(){
        console.log('下一个')
    }
    // 走马灯 end
    // 折叠面板 top
    panels = [
        {
            active: true,
            disabled: false,
            name: '面板 1',
            childPanel: 
            [
                {
                    active: true,
                    name: '面板 1-1'
                },
                {
                    active: false,
                    name: '面板 1-2'
                }
            ]
        },
        {
            active: false,
            disabled: true,
            name: '面板 2'
        },
        {
            active: false,
            disabled: false,
            name: '面板 3'
        }
    ];
    // 折叠面板 end

    //折叠卡片top
    visible:boolean;
    clickMe(){
        this.visible = false;
    }
    nzVisibleChange(e){
        console.log(e)//true  false   (显示隐藏)
    }
    //折叠卡片end
    constructor() { }
    ngOnInit() {
        // 走马灯
        setTimeout(_ => {
            this.array = [ 'one', 'two', 'three' ];
        }, 500);
    }

}
