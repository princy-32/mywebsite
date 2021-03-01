import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//forms Module
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

//MATERIAL MODULES
import { MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'

import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { DeveloperComponent } from './developer/developer.component';
import { ValuesComponent } from './values/values.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { NewNavComponent } from './new-nav/new-nav.component';
import { PostComponent } from './post/post.component';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    NavbarComponent,
    MainComponent,
    RegisterComponent,
    DeveloperComponent,
    ValuesComponent,
    DashboardComponent,
    EditProfileComponent,
    ExperienceComponent,
    EducationComponent,
    NewNavComponent,
    PostComponent,
    LogoutComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
