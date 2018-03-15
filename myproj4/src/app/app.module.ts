import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';//想用路由必须先导入

import { appRoutes } from './app.routes';//导入路由配置项

import { AppComponent } from './app.component';

import { MyPreloadingStrategy } from './common/my-preloading-strategy'
import { AuthGuard } from './auth/auth.guard';//引入路由守卫
import { AuthService } from './auth/auth.service';//引入服务

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //1.  preloadingStrategy预加载策略，上面导入，预加载所有的模块,如没有的用到的7，8chunk
    ////RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
    
    //2. 自定义预加载策略，哪个加载哪个不加载
    RouterModule.forRoot(appRoutes,{preloadingStrategy:MyPreloadingStrategy})
  ],
  providers: [MyPreloadingStrategy,AuthGuard,AuthService],
  //MyPreloadingStrategy自定义预加载
  //配置路由守卫
  bootstrap: [AppComponent]
})
export class AppModule { }
