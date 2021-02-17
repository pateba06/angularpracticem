import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicetestService {

  constructor(private _http:HttpClient) { }
  
  private url="https://jsonplaceholder.typicode.com/posts"

  getdata(){
    return this._http.get(this.url);
  }
}
