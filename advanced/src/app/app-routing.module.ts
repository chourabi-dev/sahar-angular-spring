import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { HomeComponent } from './pages/home/home.component';
import { ListEmployeesComponent } from './pages/list-employees/list-employees.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent, children:[
    { path:'', redirectTo:'list-employee', pathMatch:'full' },
    { path:'add-employee', component: AddEmployeeComponent },
    { path:'list-employee', component: ListEmployeesComponent },
    { path:'employee/:id', component:EmployeeDetailsComponent }
  ] },
  { path:'about', component:AboutComponent },
  { path:'**', component:NotFoundComponent },
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
