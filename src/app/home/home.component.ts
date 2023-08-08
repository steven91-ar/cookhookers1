import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { HomeService } from './home.service';
import { HomeInterface } from './types/home.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  @Input() slides: HomeInterface[] = [];
  currentIndex: number = 0;
  timeoutId?: number;
  categories: any[] = [];
  StarterSlides: any[] = [];
  sideSlides: any[] = [];
  dessertSlides: any[] = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.resetTimer();
    this.homeService.getCategories().subscribe((data: any) => {
      this.categories = data.categories;

      // Filtrer les catégories de petit-déjeuner, d'accompagnement et de dessert
      const StarterCategory = this.categories.find((category: any) => category.strCategory === 'Breakfast');
      const SideCategory = this.categories.find((category: any) => category.strCategory === 'Side');
      const DessertCategory = this.categories.find((category: any) => category.strCategory === 'Dessert');

      // Remplir le tableau de catégories avec les catégories filtrées
      if (StarterCategory) {
        this.homeService.getCategoryImage(StarterCategory.strCategory).subscribe((meals: any) => {
          this.StarterSlides = meals.meals;
        });
      }
      if (SideCategory) {
        this.homeService.getCategoryImage(SideCategory.strCategory).subscribe((meals: any) => {
          this.sideSlides = meals.meals;
        });
      }
      if (DessertCategory) {
        this.homeService.getCategoryImage(DessertCategory.strCategory).subscribe((meals: any) => {
          this.dessertSlides = meals.meals;
        });
      }
    });

  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }

  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.getTotalSlides() - 1 : this.currentIndex - 1;
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.getTotalSlides() - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.resetTimer();
    this.currentIndex = newIndex;

  }
  getTotalSlides(): number {
    return this.StarterSlides.length + this.sideSlides.length + this.dessertSlides.length;
  }
  goToRecipe(recipeId: string): void {
    // Naviguer vers la fiche de détail de la recette en utilisant le paramètre recipe
    this.router.navigate(['/detail', recipeId]);
  }

}
