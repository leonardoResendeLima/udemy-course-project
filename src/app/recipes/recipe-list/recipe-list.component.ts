import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe(
			"A Test Recipe",
			"This is simply a test",
			"https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1259679_8.jpg"),
		new Recipe(
			"A Fucking Nice Test Recipe",
			"This is simply a fucking test",
			"https://www.seriouseats.com/recipes/images/2016/08/20160713-mixed-fruit-pie-vicky-wasik-12-1500x1125.jpg")
	];

	constructor() { }

	ngOnInit() {
	}

	onRecipeSelected(recipe : Recipe){
		this.recipeWasSelected.emit(recipe);
	}

}
