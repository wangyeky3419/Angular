import { Component, OnInit } from '@angular/core';
//为了使用   路由事件
import { Router } from '@angular/router';

//获得路由传递过来的参数
import { ActivatedRoute } from '@angular/router'
@Component({
  	selector: 'home2',
  	templateUrl: './home2.component.html',
  	styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
	//angular在运行的时候，就会把这个路由的实例注射给我们
  	constructor(
  		private router:Router,
        public activeRoute:ActivatedRoute
  	) { }

  	ngOnInit() {
  		//定阅
  		this.router.events.subscribe((event)=>{
  			//console.log(event);//打印出所有的事件
  			//可以用instanceof获得想要的事件
  		})
        //获得    地址栏里面    传递过来的参数对象
        this.activeRoute.params.subscribe((params)=>{
            console.log(params)
        })
        //获得代码导航传递过来的参数
        this.activeRoute.queryParams.subscribe((params)=>{
            console.log('代码导航的参数',params)
        })
  	}

}
