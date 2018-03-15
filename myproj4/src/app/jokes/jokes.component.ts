import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'jokes',
  	templateUrl: './jokes.component.html',
  	styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
	public jokeContent:string="";
	public saved:boolean=true;
  	constructor() { }

  	ngOnInit() {
  		console.log('jokes')
  	}
  	writeJoke(value){
  		this.jokeContent=value;
  		this.saved=false;
  		if(value.length == 0){
  			this.saved = true
  		}
  	}
  	saveContent(){
  		this.saved=true;
  	}

}
