import { Component, OnInit } from '@angular/core';
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
@Component({
    selector: 'app-institutes-report',
    templateUrl: './institutes-report.component.html',
    styleUrls: ['./institutes-report.component.css']
})
//头像


export class InstitutesReportComponent implements OnInit {
    //====头像 top====
    //根据字符长短改变头像内文字显示大小
    text: string = UserList[3];
    color: string = ColorList[3];
    date = []
    change() {
        let idx = UserList.indexOf(this.text);
        ++idx;
        if (idx == UserList.length) idx = 0;
        this.text = UserList[idx];
        this.color = ColorList[idx];
    }
    haveValue(e){
        if(e==='Sun'){
            console.log(e)
            return true
        }
    }
    //====头像 end====
    //====日历 top====

    //====日历 end====
    constructor() { }

    ngOnInit() {
    }

}
