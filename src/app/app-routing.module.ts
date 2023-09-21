import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path:"",
    component:HomeComponent},

  { path:"login",
    component:LoginComponent},
    
  {
    path:"view",
    component:ViewComponent
  },

  {
    path:"edit/:id",
    component:EditComponent
  },

  {
    path:"add",
    component:AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
