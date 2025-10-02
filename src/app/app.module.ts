import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroesListPipe } from './heroes/heroes-list.pipe';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinecoComponent } from './cineco/cineco.component';
import { ResistenciaComponent } from './components/resistencia/resistencia.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesListPipe,
    HeroesFilterPipe,
    OperasBasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CinecoComponent, 
    ResistenciaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
