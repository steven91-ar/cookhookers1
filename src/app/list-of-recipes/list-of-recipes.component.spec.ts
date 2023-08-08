import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRecipesComponent } from './list-of-recipes.component';

describe('ListOfRecipesComponent', () => {
  let component: ListOfRecipesComponent;
  let fixture: ComponentFixture<ListOfRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfRecipesComponent]
    });
    fixture = TestBed.createComponent(ListOfRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
