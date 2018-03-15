//路由的配置文件，这个其实是可以写在app.module.ts里面的
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';//引入路由守卫

export const appRoutes=[
	{
		path:'',//当第一次进来，路径为空的时候
		redirectTo:'home',//默认跳转到home路径
		pathMatch:'full'//完全匹配，全匹配
	},
	{
		path:'home',
		loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'jokes',
		data:{preload:true},//预加载
		canLoad:[AuthGuard],//设置路由守卫，当canload返回false时，点击不会加载jokes页面
		canActivate:[AuthGuard],//设置路由是否激活，false表示不激活，就是模块点击不能用，但是模块加载进来了，即使在地址栏输入也进不来
		loadChildren:'./jokes/jokes.module#JokesModule'
	},
	{
		path:'picture',
		data:{preloda:false},//不预加载，或不写
		loadChildren:'./picture/picture.module#PictureModule'
	},
	{
		path:'**',//当用户在地址栏上瞎输入路径时
		loadChildren:'./home/home.module#HomeModule'//跳转到HomeComponent页面
	}

]