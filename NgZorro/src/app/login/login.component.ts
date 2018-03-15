import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({ 
    selector: 'app-login', 
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public validateForm: FormGroup;
    results: string[];
    public loading:boolean = false;
    //获取表单用户名，密码
    get userName() { return this.validateForm.controls.userName; }
    get password() { return this.validateForm.controls.password; }

    constructor(
        private fb: FormBuilder,
        private http: HttpClient,
        public activeRoute:ActivatedRoute,
        public router:Router
    ) {
    }

    _submitForm() {
        //表单提交前验证
        let validateForm = this.validateForm.controls;
        for (const i in validateForm) {
            this.validateForm.controls[ i ].markAsDirty();
        }
        if(validateForm.userName.status === 'VALID' && validateForm.password.status === 'VALID'){
            this.loading = true;
            //验证成功，发起请求
            let loginUrl = "http://10.10.10.160:8090//login?loginName="+validateForm.userName.value+"&password="+validateForm.password.value;
            this.http.get(loginUrl).subscribe(data => {
                    if(data['code'] === 1){
                        this.loading = false;
                        if(data['data'] === 1){
                            //管理员登录成功，跳转
                            this.router.navigate(['home'])
                        }else if(data['data'] === 21){
                            //第一次登录，注册
                        }else if(data['data'] === 2){
                            //登录成功
                            this.router.navigate(['home'])
                        }                
                    }else if(data['data'] === -1){
                        //登录失败
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
            );
        }
        
    }
    
    //快速登录
    public fastLogin(){
        this.router.navigate(['home'])
    }
    ngOnInit() {
        //登录表单验证条件初始化
        this.validateForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required, Validators.minLength(5)] ],
            remember: [ true ],
        });
    }


}
