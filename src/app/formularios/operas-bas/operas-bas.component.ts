import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1: string = "";
  num2: string = "";
  res: string = "";
  operacion: string = "";

  calcular(): void {
    let n1 = parseInt(this.num1);
    let n2 = parseInt(this.num2);

    if (this.operacion == "suma") {
      this.res = (n1 + n2).toString();
    }
    else if (this.operacion == "resta") {
      this.res = (n1 - n2).toString();
    }
    else if (this.operacion == "multi") {
      this.res = (n1 * n2).toString();
    }
    else if (this.operacion == "div") {
      this.res = (n1 / n2).toString();
    }
  }

}
