import { Action, createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/models/movie';
import { loadMovies, loadMoviesSuccess } from '../action/movies.actions';


export const moviesFeatureKey = 'movies';

export interface MoviesState {
  movies: Movie[];
}

export const initialState: MoviesState = {
  movies: []
};


export const reducer = createReducer(
  initialState,
  on(loadMoviesSuccess,
    (state: MoviesState, { data }) =>
    ({
      ...state,
      movies: [...state.movies, data]
    }))

);
