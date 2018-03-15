import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
    selector: 'app-set-msg',
    templateUrl: './set-msg.component.html',
    styleUrls: ['./set-msg.component.css']
})
export class SetMsgComponent implements OnInit {
    validateForm: FormGroup;
    public data:Array<any>;
    public loading:boolean = true;
    constructor(
        private http: HttpClient,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.loadPage();
        this.validateForm = this.fb.group({
            name: [ null, [ Validators.required ] ],
            note: [ null ]
        });
    }
    //加载页面
    public loadPage(){
        const Url = 'http://10.10.10.160:8090//getDrillConstants';
        this.http.get(Url).subscribe(
            data=>{
                this.loading = false;
                if(data['code'] == 0){
                    //加载成功
                    let resultData = data['data'];
                    resultData.map((v,k)=>{
                        if(v.stateValue.length>8){
                            v.stateValue = (v.stateValue).substring(0,8)
                        }
                    })
                    this.data = data['data']
                }else{
                    //加载失败
                }
            },
            (err: HttpErrorResponse) => {
                this.loading = false;
                if (err.error instanceof Error) {
                //客户端错误，
                console.log('An error occurred:', err.error.message);
                } else {
                // 如没网
                console.log('调用服务器错误');
                }
            }
        )
    }
    //对话框
    isVisible = false;
    isConfirmLoading = false;
    public name:string;
    public note:string;
    //显示
    showModal = () => {
        this.isVisible = true;
    }
    //取消
    handleCancel = (e) => {
        this.isVisible = false;
    }
    
    handleOk = (e) => {
        //保存前确认
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();//显示输入是否合法时的样式
            if(this.validateForm.controls[ i ].status == 'INVALID'){
                return;
            }
        }
        this.isConfirmLoading = true;
        const SetDrillUrl = 'http://10.10.10.160:8090//setDrillStart?name='+name+'&note=';
        this.http.get(SetDrillUrl).subscribe(
            data=>{
                this.isConfirmLoading = false;
                this.isVisible = false;
            },
            (err: HttpErrorResponse) => {
                this.isConfirmLoading = false;
                this.isVisible = false;
                if (err.error instanceof Error) {
                //客户端错误，
                console.log('An error occurred:', err.error.message);
                } else {
                // 如没网
                console.log('调用服务器错误');
                }
            }

        )
    }
}
