import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  succMsg='';

  formData = new FormGroup({
    name : new FormControl('',Validators.required)
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  save(){
    const data = this.formData.value;

    this.api.addDepartment(data).toPromise().then((res:any)=>{
      console.log(res);

      if (res.id) {
        this.succMsg="Added successfully !"
      }
      
    }).catch((err)=>{
      console.log(err);
      
    })


  }

}
