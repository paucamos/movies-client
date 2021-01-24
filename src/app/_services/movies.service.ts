import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = "https://localhost:5001/api/";

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.http.get(this.baseUrl + "movies").pipe(
      map( movies => {
        if (movies) {
          return movies;
        }
      })
    )
  }
}
