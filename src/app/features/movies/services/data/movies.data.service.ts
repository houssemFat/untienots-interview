import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListMoviesParams, MoviesApiService } from "../api/movies.api.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  moviesList: Array<any> = [];

  constructor(private moviesApiService: MoviesApiService) {
  }

  /**
   *
   * @param search
   */
  loadList(search: ListMoviesParams = {}) {
    this.moviesApiService.list(search).subscribe(res => {
      this.moviesList = res.list;
    })
  }


  // all other calls,
  // forgot password
  // register
  // reset password ....


}
