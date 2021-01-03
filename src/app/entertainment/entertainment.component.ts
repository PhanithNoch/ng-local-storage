import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiServiceService } from '../shared/services/api-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  
  baseUrl:string = "http://localhost:3000/";

  contents:any = [];

  constructor(private http:HttpClient,private restAPIService:ApiServiceService,private router:Router) { }

  ngOnInit() {
    this.onFetchNews();
  }

  onFetchNews()
  {
    this.restAPIService.getData(this.baseUrl+"posts").subscribe(res=>{
      this.contents = res;
    });
  }

  onToDetail()
  {
    this.router.navigate(['entertainment-details']);
  }

  

}
