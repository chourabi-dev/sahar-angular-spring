import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getMoviesList(){
    return this.http.get("https://yts.proxyninja.org/api/v2/list_movies.json");
  }
}
