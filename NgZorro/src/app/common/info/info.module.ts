import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';


import { InfoComponent } from './info.component';
@NgModule({
    declarations: [//放组件
        InfoComponent
    ],
    imports: [//放模块
        CommonModule,
        NgZorroAntdModule
    ],
    exports:[
        InfoComponent//这个地方要导出
    ],
    providers: [],
    bootstrap: []
})
export class InfoModule { }