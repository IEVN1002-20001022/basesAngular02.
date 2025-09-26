import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cineco',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cineco.component.html',
  styleUrls: ['./cineco.component.css']
})
export class CinecoComponent {

  precioboleto: number = 12;

  nombre: string = '';
  numBoletos: number = 0;
  personas: number = 1; // nueva variable
  tarjetaCINECO: boolean = false;
  resultado: string = '';

  boletos(nombre: string, numBoletos: number, personas: number, tarjetaCINECO: boolean = false): string {

    const maxBoletosPermitidos = personas * 7;

    if (numBoletos > maxBoletosPermitidos) {
      return `No puede comprar más de 7 boletos por persona. Máximo permitido: ${maxBoletosPermitidos} boletos.`;
    }

    let precioFinal: number;

    if (numBoletos > 5) {
      precioFinal = (this.precioboleto * numBoletos) * 0.85;
    } else if (numBoletos >= 3) {
      precioFinal = (this.precioboleto * numBoletos) * 0.90;
    } else if (numBoletos > 0) {
      precioFinal = this.precioboleto * numBoletos;
    } else {
      return "Ingrese un número de boletos válido";
    }

    if (tarjetaCINECO) {
      precioFinal *= 0.90;
    }

    return `Nombre: ${nombre}
Cantidad de boletos: ${numBoletos}
Número de personas: ${personas}
Precio total de sus boletos: ${precioFinal.toFixed(2)}`;
  }

  calcularBoletos() {
    this.resultado = this.boletos(this.nombre, this.numBoletos, this.personas, this.tarjetaCINECO);
  }
}
