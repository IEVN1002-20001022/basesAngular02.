// src/app/models/resistencia.ts
export class Resistencia {
  banda1: number;
  banda2: number;
  multiplicador: number;
  tolerancia: number;

  constructor(b1: number, b2: number, mult: number, tol: number) {
    this.banda1 = b1;
    this.banda2 = b2;
    this.multiplicador = mult;
    this.tolerancia = tol;
  }

  calcular() {
    const base = (this.banda1 * 10) + this.banda2;
    const nominal = base * this.multiplicador;
    const margen = this.tolerancia / 100;

    return {
      valor: nominal,
      minimo: +(nominal * (1 - margen)).toFixed(2),
      maximo: +(nominal * (1 + margen)).toFixed(2),
      bandas: [
        this.nombreColor(this.banda1),
        this.nombreColor(this.banda2),
        this.nombreColorMultiplicador(this.multiplicador),
        this.nombreColorTolerancia(this.tolerancia)
      ]
    };
  }

  private nombreColor(valor: number): string {
    const mapa: any = {
      0: 'Negro', 1: 'Café', 2: 'Rojo', 3: 'Naranja', 4: 'Amarillo',
      5: 'Verde', 6: 'Azul', 7: 'Morado', 8: 'Gris', 9: 'Blanco'
    };
    return mapa[valor] ?? 'Desconocido';
  }

  private nombreColorMultiplicador(valor: number): string {
    const mapa: any = {
      1: 'Negro', 10: 'Café', 100: 'Rojo', 1000: 'Naranja',
      10000: 'Amarillo', 100000: 'Verde', 1000000: 'Azul',
      10000000: 'Morado', 100000000: 'Gris', 1000000000: 'Blanco'
    };
    return mapa[valor] ?? 'Desconocido';
  }

  private nombreColorTolerancia(valor: number): string {
    const mapa: any = {
      5: 'Dorado 5%',
      10: 'Plata 10%'
    };
    return mapa[valor] ?? 'Desconocido';
  }
}
