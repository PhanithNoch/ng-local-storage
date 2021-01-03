import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation-app',
  templateUrl: './validation-app.component.html',
  styleUrls: ['./validation-app.component.css']
})
export class ValidationAppComponent implements OnInit {
  
  erroMessage:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  register (myForm: NgForm) {
    console.log('Successful registration');
    console.log(myForm);

    if(myForm.form.value['email'] == "")
    {
    
  
      this.erroMessage = true;
    }

  }

}
