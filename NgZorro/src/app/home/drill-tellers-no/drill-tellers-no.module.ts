import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrillTellersNoComponent } from './drill-tellers-no.component';
import { drillTellersNoRoutes } from './drill-tellers-no.routes';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@NgModule({
    declarations: [//放组件
        DrillTellersNoComponent
    ],
    imports: [//放模块
        RouterModule.forChild(drillTellersNoRoutes),
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class DrillTellersNoModule { }