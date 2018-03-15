
//建立一个服务
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//导入了 Angular 的Injectable函数，
//并作为@Injectable()装饰器使用这个函数。
//当 TypeScript 看到@Injectable()装饰器时，
//就会记下本服务的元数据。 如果 Angular 需要
//往这个服务中注入其它依赖，就会使用这些元数据
@Injectable()
export class HeroService {
	//添加一个名叫getHeros的桩方法
	getHeroes(): Promise<Hero[]>{
		//我们导入HEROES常量，并在getHeroes方法中返回它
		return Promise.resolve(HEROES); 
	}
	getHeroesSlowly():Promise<Hero[]>{
		return new Promise(resolve => {
			setTimeout(()=>resolve(this.getHeroes()),2000);
		});
	}
	getHero(id:number):Promise<Hero>{
		return this.getHeroes()
		.then(heroes=>heroes.find(hero=>hero.id===id))
	}
}