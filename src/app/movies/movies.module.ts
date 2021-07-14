import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviesFeatureKey, reducer } from './store/reducer/movies.reducer';
import { StoreModule } from '@ngrx/store';
import { MoviesComponent } from './movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieEffects } from './effect/movies.effect';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(moviesFeatureKey, reducer),
    EffectsModule.forFeature([MovieEffects]),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
