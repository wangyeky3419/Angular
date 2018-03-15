import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SetMsgComponent } from './set-msg.component';
import { setMsgRoutes } from './set-msg.routes';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [//放组件
        SetMsgComponent,
    ],
    imports: [//放模块
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(setMsgRoutes),
    ],
    exports: [
        NgZorroAntdModule
    ],
    providers: [],
    bootstrap: []
})
export class SetMsgModule{}