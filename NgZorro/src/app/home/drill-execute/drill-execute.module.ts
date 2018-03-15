import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrillExecuteComponent } from './drill-execute.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { drillExecuteRoutes } from './drill-execute.routes';
import { ExecuteChild1Component } from './execute-child1/execute-child1.component';
import { ExecuteChild2Component } from './execute-child2/execute-child2.component';
//引入公共组件的module
import { InfoModule } from '../../common/info/info.module';
//引入common组件里的module
import { ZorroPracticeModule } from '../../common/zorro-practice/zorro-pratice.module';
import { ZorroPrac2Module } from '../../common/zorro-prac2/zorro-prac2.module';

@NgModule({
    declarations: [//放组件
        DrillExecuteComponent,
        ExecuteChild1Component,
        ExecuteChild2Component
    ],
    imports: [//放模块
        RouterModule.forChild(drillExecuteRoutes),
        CommonModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormsModule,
        InfoModule,
        ZorroPracticeModule,
        ZorroPrac2Module
    ],
    providers: [],
    bootstrap: []
})
export class DrillExecuteModule { }