import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'test-ng-for',
	templateUrl: './test-ng-for.component.html',
  	styleUrls: ['./test-ng-for.component.css']
})
export class TestNgForComponent implements OnInit {
	public races:Array<any>=[
		{name:"神族1"},
		{name:"神族2"},
		{name:"神族3"},
		{name:"神族4"}
	]
  	constructor() { }

  	ngOnInit() {
  	}

}
