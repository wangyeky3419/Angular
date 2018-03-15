import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';//引入Hero类
import { HeroService } from './hero.service';//导入服务，使用数据

//英雄组件
 
@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  //providers: [HeroService]//提供数据的是谁，providers数组告诉 Angular，
  					//当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。
  					// AppComponent会使用那个服务来获取英雄列表，在它组件树中的每一个子组件也同样如此。
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];//添加一个尚未初始化的heroes属性：
  //创建一个公共属性，用来暴露这些英雄，以供绑定
  selectedHero:Hero;//添加一个onSelect方法，用于将用户点击的英雄赋给selectedHero属性,这里赋值[]也一样
  
  //添加构造函数,构造函数自己什么也不用做，
  //它在参数中定义了一个私有的heroService属性，
  //并把它标记为注入HeroService的靶点。
  constructor(
  	private router: Router,
  	private heroService: HeroService
  ){}
  getHeroes(): void {
  	//该服务被存入了一个私有变量heroService中。
  	this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
  }
  ngOnInit(): void {
  	this.getHeroes();
  }
  onSelect(hero:Hero):void{//添加一个onSelect方法，用于将用户点击的英雄赋给selectedHero属性
  	this.selectedHero = hero;
  }
  gotoDetail():void{
  	this.router.navigate(['/detail',this.selectedHero.id]);
  }
}
