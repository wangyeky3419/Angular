import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
//兄弟间通信用事件总线来传递
/**
 * 用来充当事件总线的Service
 */
@Injectable()
export class EventBusService{
	public eventBus:Subject<string> = new Subject<string>();
	constructor(){
	}
}