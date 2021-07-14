import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviesFeatureKey, reducer } from './store/reducer/movies.reducer';
import { StoreModule } from '@ngrx/store';
import { MoviesComponent } from './movies.component';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(moviesFeatureKey, reducer),
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
