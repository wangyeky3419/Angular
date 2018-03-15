import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-zorro-exe',
    templateUrl: './zorro-exe.component.html',
    styleUrls: ['./zorro-exe.component.css']
})
export class ZorroExeComponent implements OnInit {
    items = [
        {
            title:'title one',
            content:'我是标题1',
            url:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        },
        {
            title:'title two',
            content:'我是标题2',
            url:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"            
        },{
            title:'title three',
            content:'我是标题3',
            url:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        }
    ]
    
    zorroClick(e1){
        console.log(e1);
    }
    constructor() { }

    ngOnInit() {
    }

}
