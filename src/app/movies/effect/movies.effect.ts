import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../movie.service';
import { loadMoviesSuccess, searchMovies } from '../store/action/movies.actions';

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(searchMovies),
    mergeMap((payload) => this.moviesService.search(payload.data)
      .pipe(
        map(movies => loadMoviesSuccess({data: movies.Search})),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {

  }
}
