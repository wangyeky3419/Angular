import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'test-pipe',
  	templateUrl: './test-pipe.component.html',
  	styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {
	public currentTime = new Date()
  	constructor() {
  		/*setInterval(()=>{
  			this.currentTime = new Date()
  		},1000)*/
  	}

  	ngOnInit() {
  	}

}
