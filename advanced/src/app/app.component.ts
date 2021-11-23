import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'advanced';
/*


  clicks = 0;

  clickBTN(){
    console.log("clicked");
    this.clicks++;
    
  } 
  inputCHanged(){
    console.log("changed");
    
  }

  myInputVal = '';

  keyup(e){
    const val = e.target.value;
    this.myInputVal = val;
    
  }

  x = '0px';
  y = '0px';
  
  mouseIsMoving(event:any){
    console.log(event);
    const x = event.clientX;
    const y = event.clientY;
    
    this.x = x+'px';
    this.y = y+'px';
    
    
  }

  todos=[];

  addTodo(){
    this.todos.push({ todo:this.myInputVal, date:new Date() })
  }*/

  /*****forms**************************** */


  form = new FormGroup({
    fullname: new FormControl('test',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    address : new FormGroup({
      code: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      
    }) 
  })






  submit(){
    const val = this.form.value;
    console.log(val);
    
  }

  ngOnInit(): void {
    console.log(this.form);
    
  }




}
