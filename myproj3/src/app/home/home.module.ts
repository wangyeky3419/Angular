import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//想用路由必须先导入

import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { PicturesComponent } from './pictures/pictures.component';
import { TextComponent } from './text/text.component';

//想用别的模块，把他放入共享模块，然后导入共享模块
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [//放组件
    HomeComponent,
    PicturesComponent,
    TextComponent,
    
  ],
  imports: [//放模块
    //BrowserModule,//前面app.module已经导入了，这里不用导入，会报错
    RouterModule.forChild(homeRoutes),//配置一下，括号里面放的是HomeRoutes文件
    SharedModule//共享模块
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
