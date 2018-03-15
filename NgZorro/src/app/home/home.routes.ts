//路由的配置文件
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
export const homeRoutes=[
	{
		path:'',
        component:HomeComponent,
        children:[
            {
                path:'',
                redirectTo:'setMsg',
				pathMath:'full'
            },
            {
				path:'setMsg',
				loadChildren: './set-msg/set-msg.module#SetMsgModule'
            },
            {
				path:'institutes',
				loadChildren: './drill-institutes/drill-institutes.module#DrillInstitutesModule'
            },
            {
				path:'tellers',
				loadChildren: './drill-tellers/drill-tellers.module#DrillTellersModule'
            },
            {
				path:'tellersNo',
				loadChildren: './drill-tellers-no/drill-tellers-no.module#DrillTellersNoModule'
            },
            {
				path:'institutesReport',
				loadChildren: './institutes-report/institutes-report.module#InstitutesReportModule'
            },
            {
				path:'execute',
				loadChildren: './drill-execute/drill-execute.module#DrillExecuteModule'
            },
            {
				path:'zerroexe',
				loadChildren: './zorro-exe/zorro-exe.module#ZorroExeModule'
            },
            { 
				path:'zerroexe-two',
				loadChildren: './zorro-exe-two/zorro-exe-two.module#ZorroExeTwoModule'
            }
        ]
	}
	
]