import { Component } from '@angular/core';


@Component({
	selector:'app-root',
	template:`
			<h1>{{title}}</h1>
			<!--<my-heroes></my-heroes>-->
			<nav>
				<a routerLink="/heroes" routerLinkActive="active">英雄列表</a>
				<a routerLink="/dashboard" routerLinkActive="active">仪表盘</a>

			</nav>
   			<router-outlet></router-outlet>
   			<!--路由出口(Outlet)  路由器就把激活的组件显示在<router-outlet>里面。-->
			`,
	styleUrls:[ './app.component.css' ]
})

export class AppComponent {
	title='英雄'
}
//AppComponent现在加上了路由器，
//为了把它从其它种类的组件中区分出来，
//我们称这类组件为路由器组件。