import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1: string="";
  num2: string="";
  res: string="";

  sumar():void{
    this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
  }



}

