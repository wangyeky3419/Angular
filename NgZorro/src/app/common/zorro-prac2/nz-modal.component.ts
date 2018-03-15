import { Component, Input, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';

@Component({
    selector: 'nz-demo-component',
    template: `
        <div>
            <h4>{{_name}}</h4>
            <br/>
            <p>可以通过Subject传递数据</p>
            <div class="customize-footer">
            <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="emitDataOutside($event)">
                传递数据到上层
            </button>
            <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="handleCancel($event)">
                返 回
            </button>
            </div>
        </div>
    `,
    styles  : [
        `
        :host ::ng-deep .customize-footer {
            border-top: 1px solid #e9e9e9;
            padding: 10px 18px 0 10px;
            text-align: right;
            border-radius: 0 0 0px 0px;
            margin: 15px -16px -5px -16px;
        }
    `
    ]
})
export class NzModalComponent implements OnInit {
    _name: string;
  
    @Input()
    set name(value: string) {
        this._name = value;
    }
  
    emitDataOutside() {
        this.subject.next('传出数据');
    }
  
    handleCancel(e) {
        this.subject.destroy('onCancel');
    }
  
    constructor(private subject: NzModalSubject) {
        this.subject.on('onDestory', () => {
            console.log('destroy');
        });
    }
  
    ngOnInit() {
    }
}