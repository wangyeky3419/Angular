import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'save-nav',
  	templateUrl: './save-nav.component.html',
  	styleUrls: ['./save-nav.component.css']
})
export class SaveNavComponent implements OnInit {
	public currentRace:any={name:'神族'};

  	constructor() { }

  	ngOnInit() {
  	}

}
