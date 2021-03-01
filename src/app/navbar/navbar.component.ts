import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthService } from '../shared/services/auth.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _authService: AuthService) { }
 
  



  ngOnInit(): void {
  }

}
