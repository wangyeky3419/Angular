import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'//input双向数据绑定用

import { AppComponent } from './app.component';
//导入HeroDetailComponent，以便我们可以引用它。
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';//导入服务，使用数据
import { AppRoutingModule } from './app-routing.module'
@NgModule({
	//把HeroDetailComponent添加到该模块的declarations数组中。
	//declarations数组包含应用中属于该模块的 组件、管道和指令的列表。
	//组件在被其它组件引用之前必须先在一个模块中声明过
  imports: [
    BrowserModule,
    FormsModule,//此处也加上
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  
  providers: [HeroService],//每个组件都能用到这个服务
  bootstrap: [AppComponent]
})

export class AppModule { }
