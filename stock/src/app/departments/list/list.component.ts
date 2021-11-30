import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  departments=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getDepartments();
  }


  getDepartments(){
    this.api.getDepartmentsList().toPromise().then((res:any[])=>{
      this.departments = res;
      
    })
  }

}
