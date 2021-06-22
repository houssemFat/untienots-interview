import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CoreModule } from "@app-core/core.module";
import { IconsModule } from "@app-icons/icons.module";
import { MoviesRoutingModule } from "@app-features/movies/movies.routing.module";
import { MoviesListComponent } from "@app-features/movies/components/movies-list/movies-list.component";

@NgModule({
  imports: [CommonModule, CoreModule, MoviesRoutingModule, IconsModule],
  declarations: [MoviesListComponent]
})

export class MoviesModule {

}
