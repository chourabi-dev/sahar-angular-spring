import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SidemnuComponent } from './comps/sidemnu/sidemnu.component';
import { ContentComponent } from './comps/content/content.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { ListEmployeesComponent } from './pages/list-employees/list-employees.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemnuComponent,
    ContentComponent,
    AddEmployeeComponent,
    ListEmployeesComponent,
    HomeComponent,
    AboutComponent,
    EmployeeDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
