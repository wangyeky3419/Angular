import { Component, OnInit } from '@angular/core';

//引入服务
import { OrderService } from './order-services/order.service';
@Component({
  	selector: 'order-list',
  	templateUrl: './order-list.component.html',
  	styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
	private orderList:Array<any>;
	//类型是OrderService
  	constructor(private orderService:OrderService) { }

  	ngOnInit() {
  		this.orderList = this.orderService.getOrderList()
  	}

}
