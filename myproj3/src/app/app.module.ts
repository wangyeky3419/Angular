import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//想用路由必须先导入

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderService } from './order-list/order-services/order.service';
//import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';

import { appRoutes } from './app.routes';//导入路由配置项
import { ErrorPageComponent } from './error-page/error-page.component';
//import { Home2Component } from './home2/home2.component';
@NgModule({
  declarations: [//放组件
    AppComponent,
    UserListComponent,
    OrderListComponent,
    //HomeComponent,
    JokesComponent,
    ErrorPageComponent,
    //Home2Component
  ],
  imports: [//放模块
    BrowserModule,
    RouterModule.forRoot(appRoutes)//配置一下，括号里面放的是appRoute文件
  ],
  providers: [OrderService],//放服务的
  bootstrap: [AppComponent]
})
export class AppModule { }
