import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemnu',
  templateUrl: './sidemnu.component.html',
  styleUrls: ['./sidemnu.component.css']
})
export class SidemnuComponent implements OnInit {

  @Input() menu:any;
  @Input() callP:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.menu);
    this.callP();
    
    
  }

}
