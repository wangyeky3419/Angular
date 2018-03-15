//路由的配置文件
import { RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { JokeGuard } from './jokes-guard'

export const jokesRoutes = [
	{
		path:'',
		component:JokesComponent,
		//防止输入丢失
		canDeactivate:[JokeGuard]//这段代码的意思是是否可以让路由失效，把它指向JokeGuard
	}
]