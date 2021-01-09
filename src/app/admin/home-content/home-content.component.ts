import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../shared/services/api-service.service';
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  baseUrl:string = "http://localhost:3000/";
  content:any = {
    title:"",
    sub_title:"",
    short_sub_title:"",
    img_url:""
  };
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
  }

  onSave()
  {
    this.apiService.postData(this.baseUrl+"posts",this.content).subscribe(res=>{
      console.log('status data ' + res);
    });
    console.log('content :' + JSON.stringify(this.content));
  }
  

}
