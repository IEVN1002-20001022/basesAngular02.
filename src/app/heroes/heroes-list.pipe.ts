import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroesList',
  standalone: false
})
export class HeroesListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
