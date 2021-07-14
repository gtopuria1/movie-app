import { createAction, props } from '@ngrx/store';

export const loadMovies = createAction(
  '[Movies] Load Moviess'
);

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ data: any }>()
);

export const loadMoviesFailure = createAction(
  '[Movies] Load Moviess Failure',
  props<{ error: any }>()
);
