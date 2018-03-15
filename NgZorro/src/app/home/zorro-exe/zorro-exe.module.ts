import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'; 
import { ZorroExeComponent } from './zorro-exe.component';
import { ZorroExeRoutes } from './zorro-exe.routes';

@NgModule({
    declarations: [//放组件
        ZorroExeComponent
    ],
    imports: [//放模块
        RouterModule.forChild(ZorroExeRoutes),
        NgZorroAntdModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class ZorroExeModule { }