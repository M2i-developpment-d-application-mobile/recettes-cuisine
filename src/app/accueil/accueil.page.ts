import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../recettes.service';
import { Recette } from '../recette.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit{


  recettes?: Recette[]=[];

  constructor(private recetteService: RecettesService) {
  }
  ngOnInit(): void {
  this.recettes = this.recetteService.getPopularRecettes();
  }



  addToFavorites(recette: Recette) {
    this.recetteService.addToFavorites(recette);
  }

}
