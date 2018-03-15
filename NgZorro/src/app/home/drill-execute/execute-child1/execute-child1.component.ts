import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ExecuteChild2Component } from '../execute-child2/execute-child2.component';
@Component({
    selector: 'app-execute-child1',
    templateUrl: './execute-child1.component.html',
    styleUrls: ['./execute-child1.component.css']
})
export class ExecuteChild1Component implements OnInit {
    
    constructor() { }
    ngOnInit() {
    }

}
