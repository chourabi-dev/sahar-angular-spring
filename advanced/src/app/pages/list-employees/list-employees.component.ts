import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees= [];

  constructor(private router:Router, private empS:EmployeeService) { }

  ngOnInit(): void {
    console.log("hi");
    
    this.employees = this.empS.getEmployeesList();
  }

}
