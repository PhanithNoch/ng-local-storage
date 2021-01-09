import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient){}

  getData(url:string)
  {
   return this.http.get(url);
  }
  getById(url:string,id:number)
  {
  return   this.http.get(url + id);
  }
  
  postData(url:string,data:any)
  {
    return this.http.post(url,data);
  }
}
