import { Component, OnInit } from '@angular/core';
import Recipe from './recipes.model'
import RecipesService from './recipes.service'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit { 

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  } 

  onClickRecipe(ingredients: string){
    this.recipesService.getRecipe(ingredients)
  }

  delete(recipeId: string){
    console.log(recipeId)
    let i;
    for(i = 0; i < this.recipes.length; i++) {

      if(this.recipes[i].id == recipeId){
        this.recipes.splice(i, 1);
      }
      console.log(this.recipes);
    }
  }
}
