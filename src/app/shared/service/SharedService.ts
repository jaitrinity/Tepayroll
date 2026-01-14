import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Constant } from '../constant/Contant';
import { AuthenticateModel } from 'src/app/login/model/authenticateModel';

@Injectable()
export class SharedService{
    private phpServicePoint;
    constructor(private http:Http){
        this.phpServicePoint = Constant.phpServiceURL;
    }

    public authenticate(authModel:AuthenticateModel){
        let bodyString = JSON.stringify(authModel);
        return this.http.post(this.phpServicePoint+'authenticate.php',bodyString)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // common function
    public getAllListBySelectType(jsonData: any, selectType : string) {
        return this.http.post(this.phpServicePoint+'getAllList.php?selectType='+selectType,jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    public insertDataByInsertType(jsonData: any, insertType : string) {
        return this.http.post(this.phpServicePoint+'insertData.php?insertType='+insertType,jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    public updateDataByUpdateType(jsonData: any, updateType : any) {
        return this.http.post(this.phpServicePoint+'updateData.php?updateType='+updateType,jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    

    public readyAnyFile(fileName : any){
        return this.http.get('assets/'+fileName);
    }
}