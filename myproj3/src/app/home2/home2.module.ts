import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//想用路由必须先导入

import { Home2Component } from './home2.component';
import { home2Routes } from './home2.routes';

//想用别的模块，把他放入共享模块，然后导入共享模块,这也是为啥能导入user-info
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [//放组件
    Home2Component,
  ],
  imports: [//放模块
    RouterModule.forChild(home2Routes),//配置一下，括号里面放的是HomeRoutes文件
    SharedModule//共享模块
  ],
  providers: [],
  bootstrap: []
})
export class Home2Module { }
