//建立一个服务
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class DrillInstitutesService {
    public tableData = [];
    constructor(
        private http:HttpClient
    ){}
    private institutesUrl = 'http://localhost:8080/mock-log/cretable/getData';
    private updateUrl = 'http://10.10.10.160:8090/update/institute/';
    private delUrl = 'http://10.10.10.160:8090/update/institute/';
    myHttpHead = { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' }) };
    public getTableData(index){
        //return this.http.get(this.institutesUrl+'?page='+index);//get写法，现在不用
        let data = {
            query:'FT',
            method:'list',
            pageNumber:1,
            pageSize:10,
            searchType:'en_name',
        }
        return this.http.post(this.institutesUrl,JSON.stringify(data),this.myHttpHead)
    }
    //向后台post数据的写法如下
    
    public ediTable(editBody){
        // this.data.set('instId',editBody.instId)
        // .set('instName', editBody.instName)
        // .set('drillStatus', editBody.drillStatus
        // .set('id', editBody.id)
        // data.append('instId', editBody.instId);
        // data.append('instName', editBody.instName);
        // data.append('drillStatus', editBody.drillStatus);
        // data.append('id', editBody.id);
        
        return this.http.post(this.updateUrl,JSON.stringify(editBody),this.myHttpHead)
    }
    public delTable(id){
        return this.http.get(this.delUrl+'?id='+id)
    }

}