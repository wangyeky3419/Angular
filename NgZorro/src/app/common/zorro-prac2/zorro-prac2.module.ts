import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ZorroPrac2Component } from './zorro-prac2.component';
import { NzModalComponent } from './nz-modal.component'
@NgModule({
    declarations: [//放组件
        ZorroPrac2Component,
        NzModalComponent
    ],
    imports: [//放模块
        CommonModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        ZorroPrac2Component//这个地方要导出
    ],
    entryComponents:[
        NzModalComponent
    ],
    providers: [],
    bootstrap: []
})
export class ZorroPrac2Module { }