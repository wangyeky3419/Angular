import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//想用路由必须先导入

import { TestComponent } from './test.component';
import { testRoutes } from './test.routes';


@NgModule({
  declarations: [//放组件
    TestComponent,
  ],
  imports: [//放模块
    RouterModule.forChild(testRoutes),
  ],
  providers: [],
  bootstrap: []
})
export class TestModule { }
