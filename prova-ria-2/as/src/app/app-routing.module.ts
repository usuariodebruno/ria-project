import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentFormComponent } from './components/student-form/student-form.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
    {path:'student-form', component: StudentFormComponent},
    {path:'post-list',component:PostListComponent},
    {path:'post-form',component:PostFormComponent},
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
