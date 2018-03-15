import { Component, OnInit, Input } from '@angular/core';
//引入服务
import { DrillInstitutesService } from './drill-institutes.service';
import { NzModalService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
    selector: 'app-drill-institutes',
    templateUrl: './drill-institutes.component.html',
    styleUrls: ['./drill-institutes.component.css'],
})
export class DrillInstitutesComponent implements OnInit {
    validateForm: FormGroup;
    data = [];
    isVisible_edit = false;
    isConfirmLoading_edit = false;
    isVisible_add = false;
    isConfirmLoading_add = false;
    _loading = false;
    _current = 1;
    _pageSize = 10;
    _total;
//input输入框
    instId:string;
    instName:string;
    drillStatus:string;
    id:string;
    constructor(
        private drillInstitutesService:DrillInstitutesService,
        private confirmServ: NzModalService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.validateForm = this.fb.group({
            instId: [ null, [ Validators.required ] ],
            instName: [ null ],
            drillStatus: [ null ]
        });
        this.loadPage(1)
    }
    public loadPage(index){
        this._loading = true;
        this.drillInstitutesService.getTableData(index).subscribe(
            res => {
                this._loading = false;
                this.data = res['data']['content']
                this._total = res['data']['totalElements']
                this._pageSize = res['data']['size']
                this._current = res['data']['number']+1
            },
            error => { 
                this._loading = false;
            },
            () => { }
        );
    }
    
    public refreshData(index){
        this.loadPage(index)
    }
    
    //修改弹框
    showEditModal = (data) => {
        this.isVisible_edit = true;
        this.instId = data.instId
        this.instName = data.instName
        this.drillStatus = data.drillStatus
        this.id = data.id+''
    }
    handleCancel_edit = (e) => {
        console.log(1234)
        this.isVisible_edit = false;
        this.isConfirmLoading_edit = false;
    }
    //保存
    handleOk_edit = (e) => {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();//显示输入是否合法时的样式
            if(this.validateForm.controls[ i ].status == 'INVALID'){
                return;
            }
        }
        this.isConfirmLoading_edit = true;
        let editBody = this.validateForm.value;
        editBody['id'] = this.id
        this.drillInstitutesService.ediTable(editBody).subscribe(
            res => {
                console.log(res)
            },
            error => { console.log(error); },
            () => { }
        )
    }
    //增加弹框
    showAddModal = (data) => {
        this.isVisible_add = true;
        this.instId = data.instId
        this.instName = data.instName
        this.drillStatus = data.drillStatus
        this.id = data.id+''
    }
    //保存
    handleOk_add = (e) => {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();//显示输入是否合法时的样式
            if(this.validateForm.controls[ i ].status == 'INVALID'){
                return;
            }
        }
        this.isConfirmLoading_add = true;
        let addBody = this.validateForm.value;
        addBody['id'] = this.id
        this.drillInstitutesService.ediTable(addBody).subscribe(
            res => {
                console.log(res)
            },
            error => { console.log(error); },
            () => { }
        )
    }
    handleCancel_add = (e) => {
        console.log(123456)
        this.isVisible_add = false;
        this.isConfirmLoading_add = false;
    }
    public showConfirm(data){
        this.confirmServ.confirm({
            title  : '您是否确认要删除这项内容',
            content: '<b>删除后无法撤回</b>',
            onOk() {
                
                //为什么调用不了方法
            },
            onCancel() {
                // this.del()
            }
        });
    }
    public del(){
        // this.drillInstitutesService.delTable(data.id).subscribe(
        //     res => {
        //         console.log(res)
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // )
    }

    //刷新
    public reload(){
        this.loadPage(1)
    }    
    
}
