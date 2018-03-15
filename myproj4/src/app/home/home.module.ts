import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//想用路由必须先导入


import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';

@NgModule({
  declarations: [//放组件
    HomeComponent,
  ],
  imports: [//放模块
    RouterModule.forChild(homeRoutes)//配置一下，括号里面放的是HomeRoutes文件
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }