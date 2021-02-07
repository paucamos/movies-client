import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../_services/movies.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any;
  dt = DateTime.local();

  fActivities: any[] = [
    {username:"Josué", title: "The Avengers", votes: 1, date: this.dt.minus({days: 3})},
    {username:"Héctor", title: "Unchained Django", votes: 3, date: this.dt.minus({days: 2})},
    {username:"Snake", title: "Her", votes: 14, date: this.dt.minus({days: 1})},
    {username:"Kidavid", title: "Blade Runner 2077", votes: 0, date: this.dt.minus({days: 1})},
    {username:"Josué", title: "DUNE", votes: -1, date: this.dt.minus({hours: 3})},
    {username:"Laura", title: "Rebecca", votes: -2, date: this.dt.minus({hours: 1})}
  ];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.dateParser();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    }, error => {
      console.log(error);
    })
  }

  upvote(element) {
    element.votes++;
  }
  
  downvote(element) {
    element.votes--;
  }

  dateParser() {
    this.fActivities.forEach(act => {
      act.date = this.dt.diff(act.date, ['months', 'days', 'hours', 'minutes', 'seconds']).toObject();
      act.date = act.date.days;
    })
  }

}
