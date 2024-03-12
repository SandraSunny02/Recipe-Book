import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//all new imports 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './draft-schulung/server/server.component';
import { ServersComponent } from './draft-schulung/servers/servers.component';
import { WarningAlertComponent } from './draft-schulung/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './draft-schulung/SuccessAlert/success-alert.component';
import { UserFormComponent } from './draft-schulung/user-form/user-form.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './main/recipes/recipes.component';
import { ShoppingComponent } from './main/shopping/shopping.component';
import { RecipeListComponent } from './main/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './main/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './main/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserFormComponent,

    HeaderComponent,
    MainComponent,
    RecipesComponent,
    ShoppingComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
