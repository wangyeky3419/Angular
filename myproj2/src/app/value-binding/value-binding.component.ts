import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'value-binding',
  	templateUrl: './value-binding.component.html',
  	styleUrls: ['./value-binding.component.css']
})
export class ValueBindingComponent implements OnInit {
	public imgSrc:string="./assets/imgs/1.png"
  	constructor() { }
  	public changeSrc():void{
  		this.imgSrc="./assets/imgs/2.png"
  	}
  	ngOnInit() {
  	}

}
