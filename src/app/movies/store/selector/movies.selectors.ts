import { createFeatureSelector, createSelector } from '@ngrx/store';
import { moviesFeatureKey, MoviesState } from '../reducer/movies.reducer';


export const selectMoviesState = createFeatureSelector<MoviesState>(
  moviesFeatureKey,
);
export const selectMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.movies
);
