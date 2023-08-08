import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  title = 'cookHookers';
  form = this.fb.group({
    search: ['', Validators.required]
  })

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  // onSearch() {
  //   let meals: any[] = [];
  //   let value: string = this.form.controls.search.value || '';
  //   this.apiService.getMealsByCategories(value).subscribe(
  //     (result: any) => {
  //       if (result)
  //         if (result.meals)
  //           for (let element of result.meals) {
  //             meals.push(element);
  //           }
  //       this.apiService.getMealsByIngredients(value).subscribe(
  //         (result: any) => {
  //           if (result)
  //             if (result.meals)
  //               for (let element of result.meals) {
  //                 meals.push(element);
  //               }

  //           this.apiService.getMealByName(value).subscribe(
  //             (result: any) => {
  //               if (result)
  //                 if (result.meals)
  //                   for (let element of result.meals) {
  //                     meals.push(element);
  //                   }
  //               console.log(meals);
  //             }

  //           )
  //         }
  //       )
  //     }
  //   )
  // }
}
