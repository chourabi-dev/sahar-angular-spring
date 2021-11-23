import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private list = [
    { id:1 , fullname:"chourabi taher", email:'tchourabi@gmail.com' , address:"51515 somewhere" },
    { id:2 , fullname:"chourabi taher 2", email:'tchourabi@gmail.com' , address:"51515 somewhere" },
    
  ]

  constructor() { }

  getEmployeesList(){
    return this.list;
  }

  addNewEmployee(data){
    data.id = (this.list.length+1);

    this.list.push(data);
  }
}
