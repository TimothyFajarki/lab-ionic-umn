import { Injectable } from '@angular/core';
import Recipe from './recipes.model'

@Injectable({
  providedIn: 'root'
})

export default class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://bloodborne.wiki.fextralife.com/file/Bloodborne/blade_of_mercy.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Chikage',
      imageUrl: 'https://bloodborne.wiki.fextralife.com/file/Bloodborne/chikage.jpg',
      ingredients: ['Lontong2', 'Sawi2', 'Bumbu Kecap2', 'Tauge2']
    },
    {
      id: 'r3',
      title: 'Holy Moonlight Sword',
      imageUrl: 'https://bloodborne.wiki.fextralife.com/file/Bloodborne/holy_moonlight_sword.jpg',
      ingredients: ['Lontong3', 'Sawi3', 'Bumbu Kecap3', 'Tauge3']
    },
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    console.log(recipeId)
  }
}
