import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus = [
    { title:"List of employees", url:'/home/list-employee' },
    { title:"Add new employee", url:'/home/add-employee' }, 
    
  ]

  constructor() { }

  ngOnInit(): void {
  }


  callParent(){
    console.log("call form child");
    
  }

}
