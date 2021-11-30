import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*this.getResponseFromStationA().then((data)=>{
      console.log(data);

      
      this.getResponseFromStationB().then((data)=>{
        console.log(data);
        
      }).catch((error)=>{
        console.log(error);
        
      })
      
    }).catch((error)=>{
      console.log(error);
      
    })*/

    //this.startTheProccess();

    //////////////////////////////////////////////////////////////////////////

    this.watchMyPostion().subscribe((data)=>{
      console.log(data);
      
    },(err)=>{
      console.log(err);
      
    })

  }

  /**
   * 

  getResponseFromStationA(){
    console.log("calling station A");
    
    let promise  = new Promise((resolve,reject)=>{
      // traying to get data
     setTimeout(()=>{
      resolve({ success:false });
     },4000)
    });


    return promise;
  }


  
  getResponseFromStationB(){
    console.log("calling station B");
    let promise  = new Promise((resolve,reject)=>{
      // traying to get data
     setTimeout(()=>{
      resolve({ success:false });
     },2000)
    });


    return promise;
  }

  async startTheProccess(){
    console.log("starting ...");
    
    let res1 = await this.getResponseFromStationA();
    let res2 = await this.getResponseFromStationB(); 

    console.log("test");
    
  }
   */



  watchMyPostion(){

    let observable = new Observable((observer)=>{ 
      navigator.geolocation.watchPosition((res)=>{
        observer.next(res); 

      },(err)=>{
        observer.error(err);
      })
      
    })
    
    return observable;
  }


}
