import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
recipe: any = {};

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    // Récupérer l'ID de la recette depuis l'URL
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
    // Utilisez recipeId pour obtenir les détails de la recette
    this.homeService.getRecipeById(recipeId).subscribe(result => {
      this.recipe= result.meals[0];
      console.log (this.recipe);
    })
    });
  }



}
