import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//想用路由必须先导入
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
 
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        RouterModule.forChild(homeRoutes)
    ],
    providers: [],
    bootstrap: []
})
export class HomeModule { }