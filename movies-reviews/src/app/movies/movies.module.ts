import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMovieComponent } from './pages/view-movie/view-movie.component';



@NgModule({
  declarations: [
    ViewMovieComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ViewMovieComponent
  ],
  bootstrap: [ViewMovieComponent]
})
export class MoviesModule { }
