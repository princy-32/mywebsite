import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeveloperComponent } from './developer/developer.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"main",component:MainComponent},
  {path:"login",component:LoginComponent},
  {path:"developer",component:PostComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"edit-profile",component:EditProfileComponent},
  {path:"education",component:EducationComponent},
  {path:"experience",component:ExperienceComponent},
  {path:"logout",component:LogoutComponent},
  {path:"post",component:PostComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

