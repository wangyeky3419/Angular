//路由守卫防止页面输入内容丢失
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { JokesComponent } from './jokes.component';

@Injectable()

export class JokeGuard implements CanDeactivate<any>{
	canDeactivate(component:JokesComponent){
		console.log(component);
		if(!component.saved){
			return window.confirm('确定不保存吗？')
		}
		return true;
	}
}