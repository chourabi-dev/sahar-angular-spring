import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
/*
  training:string = 'angular spring';

  year:number = 2021;

  employees = [
    new Employee('taher chourabi','tchourabi@gmail.com','1515 somewhere'),
    new Employee('taher chourabi','tchourabi@gmail.com','1515 somewhere'),
    new Employee('taher chourabi','tchourabi@gmail.com','1515 somewhere'),
    new Employee('taher chourabi','tchourabi@gmail.com','1515 somewhere'),
    new Employee('taher chourabi','tchourabi@gmail.com','1515 somewhere'),
  

    { year:2015,  fullname:"chourabi taher", email:'tchourabi@gmail.com', address:'1515 somewhere'  },
    { year :2016,  fullname:"chourabi taher", email:'tchourabi@gmail.com', address:'1515 somewhere'  },
    { year :2020,  fullname:"chourabi taher", email:'tchourabi@gmail.com', address:'1515 somewhere'  },
    
    
  ]; 
  
  isNew = true; 
  canDisplayBlock = false;
 
  gallery = [
    'https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
    'https://data.1freewallpapers.com/download/fantasy-artwork-painting-4k-vaporwave-2880x1800.jpg'
  ]
  selectedIndex = 0;
  imgURL:any=this.gallery[this.selectedIndex];*/



  /*setInterval(
      ()=>{
        this.selectedIndex++;
        
        if (this.selectedIndex == this.gallery.length) {
          this.selectedIndex = 0; 
        }

        this.imgURL = this.gallery[this.selectedIndex];

      },4000
    )*/

  
  today = new Date();

  constructor(){}


  ngOnInit(){
    
  }


 


 
}
