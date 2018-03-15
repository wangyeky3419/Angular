import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'child-fives',
  	templateUrl: './child-fives.component.html',
  	styleUrls: ['./child-fives.component.scss']
})
export class ChildFivesComponent implements OnInit {
  	constructor() { }
  	public title:string = "组件5555"
	ngOnInit() {
  	}
 
}
