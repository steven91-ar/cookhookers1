import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListOfRecipesComponent } from './list-of-recipes/list-of-recipes.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { EnterComponent } from './enter/enter.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RecipeDetailComponent,
    EnterComponent,
    HomeComponent,
    HeaderComponent,
    ListOfRecipesComponent,
    SearchComponent,
    CategoriesComponent,
    RegistrationFormComponent,
    AdvancedSearchComponent,
    RecipeComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }