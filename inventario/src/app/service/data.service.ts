import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private saveData: Data[] = [];

  constructor() {}

  // DEVOLVER ARRAY PARA ACCEDER A LOS DATOS DESDE COMPONENTES
  public getarrayPlants(): Data[] {
    return this.saveData;
  }

  public newData(data: Data): void {
    this.saveData.push(data); // push - añade la nueva planta al array
    this.saveData.sort((a, b) => a['name'].localeCompare(b['name']));
    /* 
     * sort - ordena
     * a y b elementos a comparar por localeCompare
     * .localeCompare devuelve un nº negativo si a es menor que b, nº positivo si a es mayor que b, y 0 si son iguales
     *    de tal manera que ordena la lista si b es mayor que a, poniendo b antes que a
    */
  }
}
