import { Component, OnInit } from '@angular/core';
import { AuthApiService } from "../../../../core/services/api/auth.api.service";
import { MoviesDataService } from "../../services/data/movies.data.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(public moviesDataService: MoviesDataService) {
  }

  ngOnInit(): void {
    // init form
    this.moviesDataService.loadList();

  }
}
