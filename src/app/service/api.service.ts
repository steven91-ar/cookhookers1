import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http : HttpClient) { }

  getMealsByFirstLetter(firstLetter : string) :Observable<any[]> {
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/search.php?f=' + firstLetter);
  }

  getMealCategories(): Observable<any[]> {
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/categories.php');
  }
  getMealsByCategory(category : string) :Observable<any[]> {
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category);
  }

  getMealIngredients(): Observable<any[]> {
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  }

  getMealsByIngredients(ingredient: string) :Observable<any[]>{
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient);

  }

  getMealAreas(): Observable<any[]> {
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  }

  getMealByArea(area: string) :Observable<any[]> {
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + area);
  }

  getStarterMeal(starter: string) :Observable<any[]> {
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + starter);
  }
  
  getMealByName(name: string) :Observable<any[]> {
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name);
  } 
}
