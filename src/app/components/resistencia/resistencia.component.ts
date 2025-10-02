import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Resistencia } from './resistencia';

@Component({
  selector: 'app-resistencia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  banda1: number = 0;
  banda2: number = 0;
  multiplicador: number = 1;
  tolerancia: number = 5;

  resultado: any = null;

  coloresBandas = [
    { valor: 0, color: 'black' },
    { valor: 1, color: 'brown' },
    { valor: 2, color: 'red' },
    { valor: 3, color: 'orange' },
    { valor: 4, color: 'yellow' },
    { valor: 5, color: 'green' },
    { valor: 6, color: 'blue' },
    { valor: 7, color: 'purple' },
    { valor: 8, color: 'gray' },
    { valor: 9, color: 'white' }
  ];

  coloresMultiplicador = [
    { valor: 1, texto: 'x1', color: 'black' },
    { valor: 10, texto: 'x10', color: 'brown' },
    { valor: 100, texto: 'x100', color: 'red' },
    { valor: 1000, texto: 'x1000', color: 'orange' },
    { valor: 10000, texto: 'x10000', color: 'yellow' },
    { valor: 100000, texto: 'x100000', color: 'green' },
    { valor: 1000000, texto: 'x1000000', color: 'blue' },
    { valor: 10000000, texto: 'x10000000', color: 'purple' },
    { valor: 100000000, texto: 'x100000000', color: 'gray' },
    { valor: 1000000000, texto: 'x1000000000', color: 'white' }
  ];

  coloresTolerancia = [
    { valor: 5, texto: 'Dorado 5%', color: 'gold' },
    { valor: 10, texto: 'Plata 10%', color: 'silver' }
  ];

  calcularResistencia() {
    const resistencia = new Resistencia(
      this.banda1,
      this.banda2,
      this.multiplicador,
      this.tolerancia
    );
    this.resultado = resistencia.calcular();
  }

  obtenerColorCSS(valor: number, tipo: string): string {
    if (tipo === 'banda') {
      return this.coloresBandas.find(c => c.valor === valor)?.color || 'white';
    }
    if (tipo === 'multiplicador') {
      return this.coloresMultiplicador.find(c => c.valor === valor)?.color || 'white';
    }
    if (tipo === 'tolerancia') {
      return this.coloresTolerancia.find(c => c.valor === valor)?.color || 'white';
    }
    return 'white';
  }

  mostrarValor(valor: any): string {
    if (valor === null || valor === undefined) {
      return '-';
    }
    return valor.toString();
  }
}
