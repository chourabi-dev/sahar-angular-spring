import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  products = [];
// [{ "client":8 , "product": 6 , "quantity":1 },{ "client":8 , "product": 3 , "quantity":2 }]
  orders = [];

  //orderForm" (ngSubmit)="addOrder()" 

  orderForm = new FormGroup({
    product : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    
  })
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getProductsList().toPromise().then((res:any)=>this.products = res)
  }

  addOrder(){
    let idClient = this.route.snapshot.params.id;

    let data  = this.orderForm.value;
    data.client = idClient;

    this.orders.push(data);
    
  }


  validate(){
    this.api.placeOrders(this.orders).toPromise().then((res)=>{
      console.log(res);
      
    })
  }
}
