import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-local-data',
  templateUrl: './local-data.component.html',
  styleUrls: ['./local-data.component.css']
})
export class LocalDataComponent implements OnInit {
  constructor(private http:HttpClient) { }
  lstDevelopers:any = [];

  ngOnInit() {
    this.onFetchData();
  }

  onFetchData()
  {
     this.http.get('assets/data/data.json').subscribe(res=>{
       console.log("res" + res);
      this.lstDevelopers = res['data'];

    console.log(this.lstDevelopers);
    });
  }

}
