import { Injectable } from '@angular/core';
import { Recette } from './recette.model';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  private favoriteRecettes: Recette[] = [];

  private recettes = [
    {
      id :'N1',
      title: 'Tarte aux pommes',
      image: 'https://img.freepik.com/photos-gratuite/vue-dessus-delicieuse-tarte-aux-pommes_23-2148663978.jpg?w=1060&t=st=1691161015~exp=1691161615~hmac=b5be17c8d3795a369a2fef058277b51a539dadea7e945b7fbec2a96d805b2f6b',
      description: 'Une délicieuse tarte aux pommes faite avec amour.',
      ingredients: ['pommes', 'sucre', 'pâte feuilletée'],
      instructions: ['1. Préchauffez le four à 180°C ...','2.'],
      category: 'Desserts'
    },
    {
      id:'N2',
      title: 'Poulet rôti',
      image: 'https://www.legeregourmandise.fr/ytu9v9dm/uploads/2022/01/poulet-roti-800x445.jpg',
      description: 'Un poulet tendre et savoureux rôti à la perfection.',
      ingredients: ['poulet', 'herbes', 'beurre'],
      instructions: ['1. Préparez le poulet en le frottant avec des herbes ...','2.'],
      category: 'Plats principaux'
    },
    {
      id:'N3',
      title: 'Salade César',
      image: 'https://wordpress.potagercity.fr/wp-content/uploads/2019/05/Salade-C%C3%A9sar.jpg',
      description: 'Une salade classique avec des morceaux de poulet grillé.',
      ingredients: ['laitue romaine', 'poulet grillé', 'croûtons', 'parmesan'],
      instructions: ['1. Préparez la vinaigrette en mélangeant ...','2.'],
      category: 'Salades'
    },
    {
      id:'N4',
      title: 'Pancakes aux myrtilles',
      image: 'https://img.over-blog-kiwi.com/0/93/14/90/20190224/ob_4bee75_pancakes-myrtilles-americain.jpg',
      description: 'Des pancakes moelleux garnis de myrtilles fraîches.',
      ingredients: ['farine', 'myrtilles', 'œufs', 'lait', 'levure'],
      instructions: ['1. Mélangez la farine, la levure et une pincée de sel ...','2.' ],
      category: 'Petit-déjeuner'
    },

  ];

  getPopularRecettes() {
    return this.recettes
  }


  addToFavorites(recette: Recette) {
    if (!this.isRecipeInFavorites(recette)) {
      this.favoriteRecettes.push(recette);
    }
  }

  getFavoriteRecettes() {
    return this.favoriteRecettes;
  }

  isRecipeInFavorites(recette: Recette): boolean {
    return this.favoriteRecettes.some(favorite => favorite.title === recette.title);
  }

  removeFromFavorites(recette: Recette) {
    const index = this.favoriteRecettes.findIndex(favorite => favorite.title === recette.title);
    if (index !== -1) {
      this.favoriteRecettes.splice(index, 1);
    }
  }
   searchRecette(search: string): any[] {
    search = search.toLowerCase().trim();

    return this.recettes.filter(recette => {
      return (
        recette.title.toLowerCase().includes(search) ||
        recette.description.toLowerCase().includes(search) ||
        recette.ingredients.some(ingredient => ingredient.toLowerCase().includes(search))
      );
    });
}
}
