import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  departments=[];

  succMsg='';

  formData = new FormGroup({
    name : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    
    department : new FormControl('',Validators.required),
    
  })
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getDepartmentsList().toPromise().then((res:any)=>this.departments=res)

    const idURL = this.route.snapshot.params.id;

    this.api.findProductById(idURL).toPromise().then((res:any)=>{
      console.log(res);

      this.formData.setValue(res);
      
    })
  }

  save(){
    const data = this.formData.value;

    const idURL = this.route.snapshot.params.id;
    this.api.updateProduct(data,idURL).toPromise().then((res:any)=>{
      console.log(res);

      if (res.success) {
        this.succMsg="Updated successfully !"
      }
      
    }).catch((err)=>{
      console.log(err);
      
    })


  }


}
