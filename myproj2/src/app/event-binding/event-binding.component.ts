import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'event-binding',
  	templateUrl: './event-binding.component.html',
  	styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  	constructor() { }
  	public eventBind(e):void{
  		console.log(e)
  	}
  	ngOnInit() {
  	}

}
