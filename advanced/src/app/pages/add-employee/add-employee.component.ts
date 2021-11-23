import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  form = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    address :  new FormControl('',Validators.required),
  })

 

  submit(){
    const val = this.form.value;
    
    this.empS.addNewEmployee(val);
    this.router.navigateByUrl('/home');
  }


  constructor(private empS:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

}
