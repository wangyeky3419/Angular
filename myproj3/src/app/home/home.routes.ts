//路由的配置文件
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PicturesComponent } from './pictures/pictures.component';
import { TextComponent } from './text/text.component';

export const homeRoutes=[
	{
		path:'',
		component:HomeComponent,
		children:[//子路由
			{
				path:'',
				redirectTo:'pictures',
				pathMath:'full'
			},			
			{
				path:'pictures',
				component:PicturesComponent
			},
			{
				path:'text',
				component:TextComponent
			}
		]
	}
	
]