import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fake-data',
  templateUrl: './fake-data.component.html',
  styleUrls: ['./fake-data.component.css']
})
export class FakeDataComponent implements OnInit {

  arrayOFData = [];
  isLoading = false;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.isLoading = true;

    this.api.getFakeData().toPromise().then((res:any[])=>{
      this.arrayOFData = res;
    }).catch((err)=>{
      console.log(err);
      
    }).finally(()=>{
      this.isLoading = false;
    })
  }

}
