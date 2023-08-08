import { ApiService } from './../service/api.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit{
  
  constructor(private apiService : ApiService){}

  selectedArea: string = '';
  areas: any[] = [];
  selectedIngredient: string = '';
  ingredients: any[] = [];
  selectedCategory: string = '';
  categories: any[] = [];
  meals: any[] = [];
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  ngOnInit(): void {
    this.apiService.getMealsByFirstLetter('b').subscribe(
      (res : any )=> this.meals = res.meals
    );
    this.apiService.getMealCategories().subscribe(
      (result: any) => {
        this.categories = result.categories;
      }
    );
    this.apiService.getMealIngredients().subscribe(
      (reslt: any) => {
        this.ingredients = reslt.meals;
      }
    );
    this.apiService.getMealAreas().subscribe(
      (resu: any) => {
        this.areas = resu.meals;
      }
    )
  }

  showRecipeByLetter(letter : string){
    this.apiService.getMealsByFirstLetter(letter).subscribe(
      (res : any )=> this.meals = res.meals
    )
  }

  showRecipeByCategory(category : string){
    this.selectedCategory = category;
    this.apiService.getMealsByCategory(category).subscribe(
      (res : any )=> this.meals = res.meals
    )
  }

  showRecipeByIngredient(ingredient: string ) {
    this.selectedIngredient = ingredient;
    this.apiService.getMealsByIngredients(ingredient).subscribe(
      (reslt: any) => {
        this.meals = reslt.meals;
      }
    );
  }

  showRecipeByArea(area: string) {
    this.selectedArea = area;
    this.apiService.getMealByArea(area).subscribe(
      (resu: any) => {
        this.meals = resu.meals;
      }
    )
  }
}
