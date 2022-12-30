import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { TasklistComponent } from './pages/works/tasklist/tasklist.component';
import { UserlistComponent } from './pages/works/userlist/userlist.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent},
    { path: 'task-list', component: TasklistComponent},
    { path: 'user-list', component: UserlistComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
