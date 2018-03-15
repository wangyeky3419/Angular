import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ZorroPracticeComponent } from './zorro-practice.component';
@NgModule({
    declarations: [//放组件
        ZorroPracticeComponent
    ],
    imports: [//放模块
        CommonModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        ZorroPracticeComponent//这个地方要导出
    ],
    providers: [],
    bootstrap: []
})
export class ZorroPracticeModule { }