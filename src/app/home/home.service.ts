import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

 getCategories(): Observable<any> {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  }

  getCategoryImage(category: string): Observable<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }
  getRecipeById (recipeId: string):Observable<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
  }
  }
