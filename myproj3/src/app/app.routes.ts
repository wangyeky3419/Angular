//路由的配置文件，这个其实是可以写在app.module.ts里面的
import { RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
export const appRoutes=[
	{
		path:'',//当第一次进来，路径为空的时候
		redirectTo:'home',//默认跳转到home路径
		pathMatch:'full'//完全匹配，全匹配
	},
	{
		path:'home/:page',//传递参数写法,后面的是参数
		//异步模块加载方式，指向该路径下的（HomeModule）做为主模块（因为该文件里面有可能有多个模块）
		loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'home2',//传递参数写法,后面参数是对象（复杂）时什么也不写
		//异步模块加载方式，指向该路径下的（Home2Module）做为主模块（因为该文件里面有可能有多个模块）
		loadChildren:'./home2/home2.module#Home2Module'
	},
	{
		path:'jokes',
		component:JokesComponent
	},
	{
		path:'**',//当用户在地址栏上瞎输入路径时
		component:ErrorPageComponent//跳转到404页面
	}

]