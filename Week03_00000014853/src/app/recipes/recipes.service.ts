import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id:'r1',
      title:'Gado-Gado',
      imageUrl:'http://shout.sg/wp-content/uploads/2017/01/Gado-Gado.jpg',
      ingredients: ['lontong','sawi','bumbu kecap', ' tauge']
    },
    {
      id:'r2',
      title:'ketoprak',
      imageUrl:'http://shout.sg/wp-content/uploads/2017/01/Gado-Gado.jpg',
      ingredients: ['lontong','bihun','bumbu kecap', ' tahu']
    },
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return{
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    })
  }
}
