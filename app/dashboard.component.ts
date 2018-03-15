//仪表盘
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector:'my-dashboard',
	//template:`<h3>我的仪表盘</h3>`
	templateUrl:'./dashboard.component.html',
	styleUrls:[ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];//创建一个heroes数组属性
	//在构造函数中注入HeroService，并且把它保存在一个私有的heroService字段中。
	constructor(private heroService:HeroService){};
	//在 Angular 的ngOnInit生命周期钩子里面调用服务来获得英雄数据。
	ngOnInit():void{
		this.heroService.getHeroes()
		.then(heroes=>this.heroes = heroes.slice(1,5));
	}
}