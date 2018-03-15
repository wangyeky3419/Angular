import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrillInstitutesComponent } from './drill-institutes.component';
import { drillInstitutesRoutes } from './drill-institutes.routes';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


//导入服务，使用数据
import { DrillInstitutesService } from './drill-institutes.service';
@NgModule({
    declarations: [//放组件
        DrillInstitutesComponent
    ],
    imports: [//放模块
        RouterModule.forChild(drillInstitutesRoutes),
        ReactiveFormsModule,
        FormsModule,
        NgZorroAntdModule,
        CommonModule
    ],
    providers: [DrillInstitutesService],//服务提供者，主要用来定义服务
})
export class DrillInstitutesModule { }