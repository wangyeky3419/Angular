import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstitutesReportComponent } from './institutes-report.component';
import { institutesReportRoutes } from './institutes-report.routes';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';  


@NgModule({
    declarations: [//放组件
        InstitutesReportComponent
    ],
    imports: [//放模块
        RouterModule.forChild(institutesReportRoutes),
        NgZorroAntdModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class InstitutesReportModule { }