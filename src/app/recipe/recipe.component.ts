import { Component, Input } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';
import { HomeInterface } from '../home/types/home.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
@Input() slides: HomeInterface[] = [];
@Input() meal: any = {};

constructor(private homeService: HomeService, private router: Router) {}


goToRecipe(recipeId: string): void {
  // Naviguer vers la fiche de détail de la recette en utilisant le paramètre recipe
  this.router.navigate(['/detail', recipeId]);
}

}
