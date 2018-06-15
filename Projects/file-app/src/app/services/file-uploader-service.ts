import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class FileUploaderService {
    
    uploadUrl = 'http://127.0.0.1:8080/upload';
    downloadUrl = 'http://127.0.0.1:8080/download/test_download.xlsx';

    constructor(private _http: Http) {
    }
 
    public uploadFile(formdata: any) {
        let _url: string = this.uploadUrl;
        return this._http.post(_url, formdata)
        .catch(this._errorHandler); 
    }

    private _errorHandler(error: Response) {
        console.error('Error Occured: ' + error);
        return Observable.throw(error || "Some server error")

    }
}