import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from "@app-features/auth/auth.module";
import { MoviesModule } from "@app-features/movies/movies.module";

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => AuthModule
},
  {
    path: 'home',
    loadChildren: () => MoviesModule
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule, MoviesModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
