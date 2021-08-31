import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RescipeItemComponent } from './recipes/recipe-list/rescipe-item/rescipe-item.component';
import { RescipeDetailComponent } from './recipes/rescipe-detail/rescipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';  
import { AngularFirestoreModule} from '@angular/fire/firestore/';


const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'recipes/recipe-detail',
    component: RescipeDetailComponent
  },
  {
    path: 'recipes/recipe-list',
    component: RecipeListComponent
  },
  {
    path: 'recipes/recipe-list/:id',
    component: RescipeItemComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'account/newaccount',
    component: NewAccountComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RescipeItemComponent,
    RescipeDetailComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
