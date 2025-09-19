import { Component } from '@angular/core';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {


  listFilter:string='';
  muestraImg:boolean=true;
  showImage(){
    this.muestraImg=!this.muestraImg;
  }

  heroes:Heroes[]=[
    {
      "imagen": "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      descripcion: "Kakaroto",
      race: "Saiyan",
      ki:9000
    },
    {
      "imagen": "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      descripcion: "Principe de la saiyan",
      race: "Saiyan",
      ki:8500
    },
    {
      "imagen": "https://dragonball-api.com/transformaciones/Piccolo super namekiano.webp",
      nombre: "Piccolo",
      descripcion: "IDK",
      race: "Namekian",
      ki:5000
    },
    {
      "imagen": "https://dragonball-api.com/characters/bulma.webp",
      nombre: "Bulma",
      descripcion: "IDK",
      race: "Human",
      ki:0
    }
  ]
}
