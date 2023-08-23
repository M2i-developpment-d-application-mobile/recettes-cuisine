import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../recettes.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage{

  search: string = '';
  searchResults: any[] = [];

  constructor(private recetteService: RecettesService) {}

  searchRecipes() {
    if (this.search.trim() !== '') {
      this.searchResults = this.recetteService.searchRecette(this.search);
    } else {
      this.searchResults = [];
    }
  }

}
