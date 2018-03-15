//英雄详情组件
import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';//引入Hero类
import { HeroService } from './hero.service';
//@Component装饰器为组件提供了Angular元数据。 
// CSS选择器的名字hero-detail会匹配元素的标签名，
// 用于在父组件的模板中标记出当前组件的位置
@Component({
	selector:'hero-detail',
	templateUrl:'./hero-detail.component.html',
	styleUrls:[ './hero-detail.component.css' ]
})

//实现OnInit接口。
export class HeroDetailComponent implements OnInit{
	hero: Hero;//hero属性的类型是Hero 
	//注入ActivatedRoute和HeroService服务到构造函数中
	//将它们的值保存到私有变量中：
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
	    this.route.paramMap
	      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
	      .subscribe(hero => this.hero = hero);
	}
	goBack():void{//返回
		this.location.back();
	}
}