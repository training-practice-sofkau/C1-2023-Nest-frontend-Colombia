import { Pipe, PipeTransform } from '@angular/core';

/**
 * Clase que implementa el pipe "firstWord".
 * Devuelve la primera palabra de un string.
 *
 * @remarks
 * Este pipe es utilizado para obtener la primera palabra de un string.
 *
 * @example
 * {{ 'Este es un ejemplo' | firstWord }} // Devuelve 'Este'
 */
@Pipe({
  name: 'firstWord',
})
export class FirstWordPipe implements PipeTransform {
  /**
   * Método que realiza la transformación.
   *
   * @param value - Valor que se quiere transformar.
   * @returns La primera palabra del valor.
   */
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.split(' ')[0];
  }
}
