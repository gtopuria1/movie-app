import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MoviesState } from './store/reducer/movies.reducer';
import { selectMovies } from './store/selector/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private store: Store<MoviesState>) {
    this.movies$ = this.store.pipe(select(selectMovies));
  }

  ngOnInit(): void {

  }

}
