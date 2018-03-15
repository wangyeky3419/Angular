//路由配置文件
import { RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const appRoutes=[
    {
        path:'',//第一次进来路径为空的时候默认跳转到登录界面
        redirectTo:'login',
        pathMatch:'full'//完全匹配
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        loadChildren:'./home/home.module#HomeModule'
    },
    {
        path:'test',
        loadChildren:'./test/test.module#TestModule'
    }
]