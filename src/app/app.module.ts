import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroesListPipe } from './heroes/heroes-list.pipe';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesListPipe,
    HeroesFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
