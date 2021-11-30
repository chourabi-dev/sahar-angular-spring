import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies = [];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getMovies();
    

    // localstorage

    localStorage.setItem('test','123');
    const res = localStorage.getItem('test');

    alert(res);

    localStorage.clear();

  }


  getMovies(){
    this.api.getMoviesList().toPromise().then((res:any[])=>{
      console.log(res);
      //this.movies = 
    })
  }

}
