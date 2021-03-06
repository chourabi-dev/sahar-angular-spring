import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getProductsList().toPromise().then((res:any)=>this.products = res)
  }


  deleteProduct(id){
    if (confirm('Do you really want to delete this item ?')) {
      this.api.deleteProduct(id).toPromise().then((res:any)=>{
        this.getData();
      })
    }
  }

}
