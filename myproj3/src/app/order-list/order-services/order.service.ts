import { Injectable } from '@angular/core';

@Injectable()//可注入的
export class OrderService {

  	constructor() { }
  	public getOrderList():Array<any>{//任何类型的数组
  		return [
  			{orderId:'1',orderName:'王1'},
  			{orderId:'2',orderName:'王2'},
  			{orderId:'3',orderName:'王3'},
  			{orderId:'4',orderName:'王4'}
  		]
  	}
}
