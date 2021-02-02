import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any;

  fActivities: any[] = [
    {username:"Josué", title: "The Avengers"},
    {username:"Héctor", title: "Unchained Django"},
    {username:"Snake", title: "Her"},
    {username:"Kidavid", title: "Blade Runner 2077"},
    {username:"Josué", title: "DUNE"},
    {username:"Laura", title: "Rebecca"}
  ];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    //this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    }, error => {
      console.log(error);
    })
  }

}
