import { Route, PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import "rxjs/add/observable/of";//运算符
//自定义一个加载策略，实现PreloadingStrategy接口
export class MyPreloadingStrategy implements PreloadingStrategy {//PreloadingStrategy 加载策略
	preload(route:Route,fn:()=>Observable<any>):Observable<any>{
		//判断app.routes.ts里面的  route.data存在并且route.data.perload==true时才执行fn(),进行预加载
		return route.data&&route.data.preload?fn():Observable.of(null);
	}
}