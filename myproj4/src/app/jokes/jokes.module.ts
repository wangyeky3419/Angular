import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//用路由调用

import { JokesComponent } from './jokes.component';
import { jokesRoutes } from './jokes.routes';
import { JokeGuard } from './jokes-guard';//引入jokes自己的守卫

@NgModule({
	declarations:[
		JokesComponent
	],
	imports:[
		RouterModule.forChild(jokesRoutes)
	],
	providers:[JokeGuard],
	bootstrap:[]
})
export class JokesModule {}