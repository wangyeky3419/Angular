import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'; 
import { ZorroExeTwoComponent } from './zorro-exe-two.component';
import { ZorroExeTwoRoutes } from './zorro-exe-two.routes';

@NgModule({
    declarations: [//放组件
        ZorroExeTwoComponent
    ],
    imports: [//放模块
        RouterModule.forChild(ZorroExeTwoRoutes),
        NgZorroAntdModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class ZorroExeTwoModule { }