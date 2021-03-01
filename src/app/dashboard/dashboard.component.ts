import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route :Router) { }

  OnEditProfile(){
    this.route.navigateByUrl('/edit-profile');
  }

  OnAddExperience(){
    this.route.navigateByUrl('/experience');

  }

  OnAddEducation(){
    this.route.navigateByUrl('/education');
  }

  OnClick(){
    this.route.navigateByUrl('/post')
  }
  ngOnInit(): void {
  }

}
