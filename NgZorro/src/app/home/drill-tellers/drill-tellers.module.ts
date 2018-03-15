import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrillTellersComponent } from './drill-tellers.component';
import { drillTellersRoutes } from './drill-tellers.routes';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

import { InfoModule } from '../../common/info/info.module';

@NgModule({
    declarations: [//放组件
        DrillTellersComponent
    ],
    imports: [//放模块
        RouterModule.forChild(drillTellersRoutes),
        CommonModule,
        NgZorroAntdModule,
        InfoModule
    ],
    providers: [],
    bootstrap: []
})
export class DrillTellersModule { }