import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //archivo que se va a abrir al ejecutar el componente
  standalone: false, 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular02';
  //declarar variables que se muestran en html
  duplicaNumero(numero:number): number{
    return numero * 2;
  }
  pelicula={
    titulo: 'Batman',
    anio: new Date(),
    precio: 2500,
    
  }
}
