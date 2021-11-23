import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  employees = [];

  constructor(private emps:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.emps.getEmployeesList();
  }

}
