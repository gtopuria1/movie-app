import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { searchMovies } from './store/action/movies.actions';
import { MoviesState } from './store/reducer/movies.reducer';
import { selectMovies } from './store/selector/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]> | undefined;
  searchForm: FormGroup = this.fb.group({
    movieName: new FormControl('', Validators.required),
  });

  constructor(private store: Store<MoviesState>,
    private fb: FormBuilder) {
    this.movies$ = this.store.pipe(select(selectMovies));
  }

  ngOnInit(): void {

  }

  search() {
    this.store.dispatch(searchMovies({ data: this.searchForm.controls.movieName.value}));
  }

}
