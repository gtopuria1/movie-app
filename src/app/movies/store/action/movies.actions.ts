import { createAction, props } from '@ngrx/store';

export const searchMovies = createAction(
  '[Movies] Search Movies', props<{ data: string }>()
);

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ data: any }>()
);

export const loadMoviesFailure = createAction(
  '[Movies] Load Moviess Failure',
  props<{ error: any }>()
);
