import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  departments=[];

  succMsg='';

  formData = new FormGroup({
    name : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    
    department : new FormControl('',Validators.required),
    
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getDepartmentsList().toPromise().then((res:any)=>this.departments=res)
  }

  save(){
    const data = this.formData.value;

    this.api.addProduct(data).toPromise().then((res:any)=>{
      console.log(res);

      if (res.id) {
        this.succMsg="Added successfully !"
      }
      
    }).catch((err)=>{
      console.log(err);
      
    })


  }


}
