import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password : any;

  constructor(private route: Router) { }


  
  onSubmit(f: NgForm) {
   // console.log(f.value);  
  //  console.log(f.valid);  
  if(this.username=="Admin@ex.com" && this.password=="123456")
  {
     this.route.navigateByUrl('/dashboard');
   }
  
    
    }

   

  ngOnInit(): void {
  }

    
  }
    
 // LoginUser(){
 //   if(this.username=="Admin@ex.com" && this.password=="123456")
   // {
    //  console.log("Successfully LogedIn");
    //}
  //}


