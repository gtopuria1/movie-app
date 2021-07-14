import * as fromMovies from './movies.actions';

describe('loadMoviess', () => {
  it('should return an action', () => {
    expect(fromMovies.loadMoviess().type).toBe('[Movies] Load Moviess');
  });
});
