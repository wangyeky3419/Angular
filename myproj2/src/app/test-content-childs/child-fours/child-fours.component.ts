import { Component, OnInit, ContentChildren, QueryList, ElementRef  } from '@angular/core';

//要想操作先引用
import { ChildFivesComponent } from '../child-fives/child-fives.component'
@Component({
  	selector: 'child-fours',
  	templateUrl: './child-fours.component.html',
  	styleUrls: ['./child-fours.component.scss']
})
export class ChildFoursComponent implements OnInit {
	@ContentChildren(ChildFivesComponent)
	childFivesList:QueryList<ChildFivesComponent>
  	constructor() { }

  	ngOnInit() {
  	}
  	ngAfterContentInit(){
  		this.childFivesList.forEach((item)=>{
  			console.log(item);
  		})
  	}
  	
}
