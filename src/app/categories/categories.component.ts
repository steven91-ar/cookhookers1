import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  selectedCategory: string = "";
  @Output() cat: EventEmitter<any> = new EventEmitter(); 

  constructor(private router: Router) {}


  selectCat(cat: string) {
    this.cat.emit(cat);
    this.selectedCategory = cat;
}
//envoie l'evenement comme click et envoie la data, dans ce cas précis c'est la catégorie//
}
