
/**
 * 这是共享模块
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//想用路由必须先导入

import { UserInfoComponent } from '../user-info/user-info.component';

@NgModule({
  declarations: [//放组件
    UserInfoComponent
  ],
  imports: [],//放模块
  exports:[//共享模块需要导出
    UserInfoComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
