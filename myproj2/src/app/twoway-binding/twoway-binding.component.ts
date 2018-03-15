import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'twoway-binding',
  	templateUrl: './twoway-binding.component.html',
 	styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {
	public fontSize:Number = 16;
  	constructor() { }

  	ngOnInit() {
  	}
  	public twowayBind(e):void{
  		console.log(e)
  	}
}
