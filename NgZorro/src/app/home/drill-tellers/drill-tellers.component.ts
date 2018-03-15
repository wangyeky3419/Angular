import { Component, OnInit } from '@angular/core';
import { UploadFile } from '../../../components/upload/interface';
// import { NzMessageService } from '../../../components/message/nz-message.service';
import { InfoComponent } from '../../common/info/info.component'

@Component({
    selector: 'app-drill-tellers',
    templateUrl: './drill-tellers.component.html',
    styleUrls: ['./drill-tellers.component.css']
})
export class DrillTellersComponent implements OnInit {
    constructor() { }
    //====文件上传1 top====
    // fileList = [{
    //     uid: -1,
    //     name: 'xxx.png',
    //     status: 'done',
    //     url: 'http://www.baidu.com/xxx.png',
    // }];
    fileList: UploadFile[] = [];
    handleChange(info): void {
        console.log(info)
        const fileList = info.fileList;
        // 2. read from response and show file link
        if (info.file.response) {
            info.file.url = info.file.response.url;
        }
        // 3. filter successfully uploaded files according to response from server
        this.fileList = fileList.filter(item => {
            if (item.response) {
                return item.response.status === 'success';
            }
            return true;
        });
    }
    nzRemove = (file: UploadFile) : boolean =>{
        console.log(file)
        //移除，return false不移除
        return true
    } 
    //====文件上传1 end====
    //====图片上传1 top====
    defaultFileList = [];
    fileList1 = [...this.defaultFileList];
    //====图片上传2 end====

    //====用户头像 top====
    loading = false;
    avatarUrl: string;
    beforeUpload = (file: File) => {//上传前对图片格式大小验证
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            alert('只能上传JPG!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            alert('最大不能超过2M!');
        }
        return isJPG && isLt2M;
    }
    private getBase64(img: File, callback: (img: any) => void) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            console.log(reader.result)
            return callback(reader.result)
        });
        reader.readAsDataURL(img);
    }
    handleChange2(info: { file: UploadFile }) {
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, (img: any) => {
                this.loading = false;
                this.avatarUrl = img;
            });
        }
      }
    //====用户头像 end====

    //====照片墙 top====
    fileList2 = [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }];
        previewImage = '';
        previewVisible = false;
    handlePreview = (file: UploadFile) => {
        //预览文件调用
        console.log(this.fileList2)
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }
    //====照片墙 end====
    //====拖拽 top====
    handleChange3({ file, fileList }) {
        const status = file.status;
        if (status !== 'uploading') {
            console.log(file, fileList);
        }
        if (status === 'done') {
            alert(`${file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            alert(`${file.name} file upload failed.`);
        }
      }
    //====拖拽 end====
    

    ngOnInit() {
    }

}
