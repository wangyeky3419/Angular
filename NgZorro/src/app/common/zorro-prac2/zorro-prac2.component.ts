import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzInputDirectiveComponent } from '../../../components/input/nz-input.directive.component';
import { NzModalService, NzModalSubject, NzNotificationService, NzMessageService } from 'ng-zorro-antd';
//引入外部modal组件
import { NzModalComponent } from './nz-modal.component';

@Component({
    selector: 'app-zorro-prac2',
    templateUrl: './zorro-prac2.component.html',
    styleUrls: ['./zorro-prac2.component.css']
})
export class ZorroPrac2Component implements OnInit {
//==== Tag标签 top====
    public tags = ['Unremovable', 'Tag 2', 'Tag 3'];
    public inputVisible = false;
    public inputValue = '';
    @ViewChild('input') input: NzInputDirectiveComponent;
    //删除
    handleClose(removedTag: any): void {
        this.tags = this.tags.filter(tag => tag !== removedTag);
        console.log(removedTag)
        console.log(this.tags)//删除后的数组数据
    }
    //显示到页面
    sliceTagName(tag: string): string {
        //最多显示4个字母，多余的显示省略号
        const isLongTag = tag.length > 4;
        return isLongTag ? `${tag.slice(0, 4)}...` : tag;
    }
    //点击按钮，显示input
    showInput(): void {
        this.inputVisible = true;
        setTimeout(() => {
            this.input.nativeElement.focus();
        }, 10);
    }
    //input失去焦点后触发事件
    handleInputConfirm(): void {
        if (this.inputValue) {
            this.tags.push(this.inputValue);
        }
        this.inputValue = '';
        this.inputVisible = false;
    }
    //关闭前确认是否关闭
    nzBeforeClose(e){
        let r = window.confirm('是否要关闭');
        if(r==true){
            console.log('关闭了')
        }else{
            event.preventDefault();
        }
    }
//==== Tag标签 end====
//==== Alert警告提示 top====
    afterClose() {
        console.log('close');
    }
//==== Alert警告提示 end====

//==== modal top====
    success() {
        this.confirmServ.success({
            title: '这是一条成功信息',
            content: '一些附加信息一些附加信息一些附加信息'
        });
    }
    showConfirm = () => {
        this.confirmServ.confirm({
            title  : '您是否确认要删除这项内容',
            content: '<b>一些解释</b>',
            onOk() {
                console.log('确定');
            },
            onCancel() {
            }
        });
    };
    //=============================以下是使用Component的部分
    /**
     * 如果使用component模式，则需要在NgModule中的 
     * declarations 和 entryComponents 加入自定义的component
     */
    showModalForComponent() {
        const subscription = this.confirmServ.open({
        title : '对话框标题',
        content : NzModalComponent,
        onOk() {
        },
        onCancel() {
            console.log('取消component');
        },
        footer: false,
        componentParams: {
            name: '测试渲染Component'
        }
        });
        subscription.subscribe(result => {
            console.log('状态',result);
        })
    }
//==== modal end====
//==== 通知提醒框 top====
    createNotification = (type) => {
        this._notification.create(type, '这是标题', '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案');
    };
//==== 通知提醒框 end====
//==== 起泡确认 top====
    cancel = function () {
        this.message.info('点击取消');
    };

    confirm = () => {
        this.message.info('点击确认')
    };
//==== 起泡确认 end====
    constructor(
        private confirmServ: NzModalService,
        private _notification: NzNotificationService,
        private message: NzMessageService) {

    }

    ngOnInit() {
    }

}
