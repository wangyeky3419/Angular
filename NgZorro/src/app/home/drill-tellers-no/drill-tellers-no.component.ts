import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//省市级联动数据
import * as moment from 'moment';
const init_options = [   
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
                isLeaf: true
            }],
        }, {
            value: 'ningbo',
            label: 'Ningbo',
            isLeaf: true
        }]
    }, 
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
                isLeaf: true
            }],
        }],
    }
];
const other_options = [{
    value: 'fujian',
    label: 'Fujian',
    children: [{
        value: 'xiamen',
        label: 'Xiamen',
        children: [{
            value: 'Kulangsu',
            label: 'Kulangsu',
            isLeaf: true
        }],
    }]
  }, {
    value: 'guangxi',
    label: 'Guangxi',
    children: [{
        value: 'guilin',
        label: 'Guilin',
        children: [{
            value: 'Lijiang',
            label: 'Li Jiang River',
            isLeaf: true
        }],
    }],
}];
@Component({
    selector: 'app-drill-tellers-no',
    templateUrl: './drill-tellers-no.component.html',
    styleUrls: ['./drill-tellers-no.component.css']
})

export class DrillTellersNoComponent implements OnInit {
    constructor(private fb: FormBuilder) {
    }
    //===============步骤条部分top====================
    current = 0;//控制步骤条进度
    index = 0;
    pre() {
        this.current -= 1;
        this.changeContent();
    }
    next() {
        this.current += 1;
        this.changeContent();
    }
    done() {
        //this._message.success('done');
    }
    changeContent() {
        switch (this.current) {
            case 0: {
                this.index = 0;
                break;
            }
            case 1: {
                this.index = 1;
                break;
            }
            case 2: {
                this.index = 2;
                break;
            }
            default: {
                this.index = -1;
            }
        }
    }
    //===============步骤条部分end====================
    //===============步骤条表单top====================
    validateForm: FormGroup;
    _submitForm(value) {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();
            if(this.validateForm.controls[ i ].status == 'INVALID'){
                console.log('验证失败');
                return false
            }
        }
        console.log('验证通过');
        console.log('表单的值为',value)
    }
    updateConfirmValidator() {
        /** wait for refresh value */
        setTimeout(_ => {
          this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
        });
    }
    
    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
             return { required: true };
        } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
            return { confirm: true, error: true };
        }
    };
    
    getCaptcha(e: MouseEvent) {
        e.preventDefault();
    }
    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }
    //===============步骤条表单end====================
    
    //===============省市级联动top====================
    _options = null;
    _value: any[] = null;
    _console(value) {
        console.log(value);
    }
    _changeNzOptions(): void {
        if (this._options === init_options) {
            this._options = other_options;
        } else {
            this._options = init_options;
        }
    }
    clear(){
        console.log('数据被清空了')
    }
    //===============省市级联动end====================

    //===============CheckBox top====================
    allChecked = false;
    indeterminate = true;//控制选中样式,选中为true，不选中为false
    selText = '全选';
    checkOptionsOne = [
        { label: 'Apple', value: 'Apple', checked: true },
        { label: 'Pear', value: 'Pear', checked: false },
        { label: 'Orange', value: 'Orange', checked: false },
    ];
    //全选取消
    updateAllChecked() {
        console.log(111)
        this.indeterminate = false;
        
        if (this.allChecked) {
            this.selText = '取消';
            this.checkOptionsOne.forEach(item => item.checked = true);
        } else {
            this.selText = '全选';
            this.checkOptionsOne.forEach(item => item.checked = false);
        }
    }
    //单个勾选触发的事件
    updateSingleChecked() {
        if (this.checkOptionsOne.every(item => item.checked === false)) {
            this.selText = '全选';
            this.allChecked = false;
            this.indeterminate = false;
        } else if (this.checkOptionsOne.every(item => item.checked === true)) {
            this.selText = '取消';
            this.allChecked = true;
            this.indeterminate = false;
        } else {
            this.selText = '全选';
            this.indeterminate = true;
        }
    }
    getVal(){//获取数据
        console.log(this.checkOptionsOne)
        //输出的是时间选择框的内容
        console.log(this._startDate)
        console.log(this._endDate)
    }
    //===============CheckBox end====================

    //===============日期选择 top====================
    _date = null;
    _dateRange = [null, null];

    _startDate = null;
    _endDate = null;
    newArray = (len) => {
        const result = [];
        for (let i = 0; i < len; i++) {
            result.push(i);
        }
        return result;
    };
    //开始日期获取值
    _startValueChange = () => {
        if (this._startDate > this._endDate) {
            this._endDate = null;
        }
    };
    //结束日获取值
    _endValueChange = () => {
        if (this._startDate > this._endDate) {
            this._startDate = null;
        }
    };
    _disabledStartDate = (startValue) => {
        if (!startValue || !this._endDate) {
            return false;
        }
        return startValue.getTime() >= this._endDate.getTime();
    };
    _disabledEndDate = (endValue) => {
        if (!endValue || !this._startDate) {
            return false;
        }
        return endValue.getTime() <= this._startDate.getTime();
    };
    get _isSameDay() {
        return this._startDate && this._endDate && moment(this._startDate).isSame(this._endDate, 'day')
    }
    get _endTime() {
        return {
            nzHideDisabledOptions: true,
            nzDisabledHours: () => {
                return this._isSameDay ? this.newArray(this._startDate.getHours()) : [];
            },
            nzDisabledMinutes: (h) => {
                if (this._isSameDay && h === this._startDate.getHours()) {
                    return this.newArray(this._startDate.getMinutes());
                }
                return [];
            },
            nzDisabledSeconds: (h, m) => {
                if (this._isSameDay && h === this._startDate.getHours() && m === this._startDate.getMinutes()) {
                    return this.newArray(this._startDate.getSeconds());
                }
                return [];
            }
        }
    }
    //===============日期选择 end====================
    
    //===============数字输入 top====================
    demoValue = 100;//默认值
    formatterPercent = value => `${value}%`;//数字-->百分数
    parserPercent = value => value.replace('%', '');//百分数-->数字
    formatterDollar = value => `$${value}`;//数字-->$
    parserDollar = value => value.replace('$', '');//$-->数字
    formatterInt = value =>  value ? parseInt(value , 10) : '';//转成10进制
    parserInt = value => parseInt(value, 10);
    onFocus(e){
        console.log('获得焦点',e)
    }
    //===============数字输入 end====================
    //===============输入框组合 top==================
    siteName = 'mysite';
    beforeValue = 'http://';
    afterValue = '.com'
    nzBlur(e){
        //输出拼接好的值
        console.log(e)
    }
    ngChange(e){
        console.log(e)
    }
    //===============输入框组合 end==================
    //===============星级评分+radio top====================
    starValue = 3;

    radioValue = 'A';
    singleValue = true;
    radioVal(){
        console.log(this.radioValue)
    }
    //===============星级评分+radio end====================
    //===============select top====================
    options = [];
    selectedOption;
    //===============select end====================

    //===============穿梭框 top====================
    list: any[] = [];//里面的direction值分left和right
    filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
    }
    search(ret: any) {
        //搜索输入值
        console.log('nzSearchChange', ret);
        console.log(this.list)
    }
    select(ret: any) {
        console.log('nzSelectChange', ret);
    }
    change(ret: any) {
        //值改变相应的direction也改变
        for(var value of ret.list){
            value.direction = ret.to
        }
        console.log('nzChange', ret);
    }
    //===============穿梭框 end====================
    ngOnInit() {
        this.validateForm = this.fb.group({
            email            : [ null, [ Validators.email ] ],
            password         : [ null, [ Validators.required ] ],
            checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
            nickname         : [ null, [ Validators.required ] ],
            phoneNumberPrefix: [ '+86' ],
            phoneNumber      : [ null, [ Validators.required, Validators.pattern('^[1]{1}[3,4,5,8]{1}[0-9]{9}$') ] ],
            captcha          : [ null, [ Validators.required ] ],
            agree            : [ false ]
        });
        //联动部分
        setTimeout(() => {
            this._options = init_options;
        }, 100);
        //select部分
        /*模拟服务器异步加载*/
        setTimeout(_ => {
        this.options = [
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'I\'am disabled', label: 'Disabled', disabled: true }
        ];
            this.selectedOption = this.options[ 0 ];
        }, 100);
        // 穿梭框部分
        for (let i = 0; i < 20; i++) {
            this.list.push({
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                direction: Math.random() * 2 > 1 ? 'right' : 'left'
            });
        }
    }

}
