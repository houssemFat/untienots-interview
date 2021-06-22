import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from "@app-core/core.module";
import { CommonModule } from "@angular/common";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";

const routes: Routes = [
  {path: '', component: MoviesListComponent}
];


@NgModule({
  imports: [CoreModule, CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers : []
})
export class MoviesRoutingModule {
}
