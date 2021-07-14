import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import MovieDetail from '../models/movie-detail';
import { SearchResponse } from '../models/search-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesUrl = 'http://www.omdbapi.com/';
  private apiKey = 'f79aeba3';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  search(term: string, page: number = 1): Observable<SearchResponse> {
    if (!term.trim()) {
      return of({
        Response: 'False',
        Search: [],
        totalResults: '0',
      });
    }
    const params = new HttpParams().set('apiKey', this.apiKey).set('s', term).set('page', page.toString());
    return this.http
      .get<SearchResponse>(this.moviesUrl, { params })
      .pipe(
        catchError(
          this.handleError<SearchResponse>('searchMovie', {
            Response: 'False',
            Search: [],
            totalResults: '0',
          })
        )
      );
  }

  getMovieDetail(imdbId: string): Observable<MovieDetail> {
    const params = new HttpParams().set('apiKey', this.apiKey).set('plot', 'full').set('i', imdbId);
    return this.http
      .get<MovieDetail>(this.moviesUrl, { params })
      .pipe(
        catchError(this.handleError<MovieDetail>(`getMovieDetail id=${imdbId}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
