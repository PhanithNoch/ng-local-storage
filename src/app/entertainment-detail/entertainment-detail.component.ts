import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/services/api-service.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-entertainment-detail',
  templateUrl: './entertainment-detail.component.html',
  styleUrls: ['./entertainment-detail.component.css']
})
export class EntertainmentDetailComponent implements OnInit {
  baseUrl:string = "http://localhost:3000/";
  
  post = {};

  constructor(private apiService:ApiServiceService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.onLoadData();
  }
  
  onLoadData()
  {
    let id;
    this.router.paramMap.subscribe(res=>{
      console.log(res['params']['id']);
      id  = res['params']['id'];
    })
    this.apiService.getById(this.baseUrl+"posts/",id).subscribe(
      res=>{
        console.log("data get by id " + res);
      this.post = res;
      }
    );
  }

}
