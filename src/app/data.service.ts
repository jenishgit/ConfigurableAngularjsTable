import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { IData } from './Data'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class DataService{
    private _dataUrl = 'data/data.json';
    constructor(private _http: Http){

    }

    getData():Observable<IData[]>{
        return this._http.get(this._dataUrl).map((response: Response) => <IData[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}