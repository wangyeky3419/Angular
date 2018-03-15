import { Component, OnInit } from '@angular/core';

//获得路由传递过来的参数
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	//注射进来
  	constructor(
  		public activeRoute:ActivatedRoute,
  		public router:Router
  	) { }

  	ngOnInit() {
  		//订阅
  		this.activeRoute.params.subscribe((params)=>{
  			console.log(params);//获得前面传递过来的参数
  		})
  	}
  	public manualNav():void{//代码导航跳转并传参
  		this.router.navigate(['home2'],{queryParams:{userId:22,userName:'孔'}})
  	}

}
