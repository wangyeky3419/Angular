import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  	selector: 'font-resizer',
  	templateUrl: './font-resizer.component.html',
  	styleUrls: ['./font-resizer.component.css']
})
export class FontResizerComponent implements OnInit {
	@Input() size:number;//进来的是size
	@Output() sizeChange = new EventEmitter<number>();//出去的是sizeChange

  	constructor() { }

  	ngOnInit() {
  		
  	}
  	dec(){
  		this.resize(-1);
  	}
  	inc(){
  		this.resize(+1);
  	}
  	resize(delta:number){
  		this.size = +this.size+delta;
  		this.sizeChange.emit(this.size);
  	}
}
