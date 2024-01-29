import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent {
  input: string = '';
  selected: string = '';
  saveData: Data[] = [];

  constructor(
    private dataService: DataService
  ) {}

  // SELECCION DE PLANTA (ARBUSTO | ARBOL)
  public select(option: string): void {
    this.selected = option;
    
    console.log(this.input);
  }
  
  // VACIAR FORMULARIO
  public deleteForm(): void {
    this.input = '';
    this.selected = '';
  }

  // GUARDAR LAS PLANTAS CREADAS EN ARRAY EN data.service
  public arrayPlants(): void {
    if (this.input && this.selected) {
      const newElement: Data = {
        name: this.input,
        type: this.selected,
      };

      this.dataService.newData(newElement);

      console.log('Array Plants:', this.dataService.getarrayPlants());
      this.deleteForm();
    }
  }

  // MOSTRAR LAS PLANTAS CREADAS
  public ngOnInit(): void {
    this.saveData = this.dataService.getarrayPlants();
  }

  // ELIMINAR PLANTA DE LA LISTA Y DEL ARRAY
  public deletePlant(index: number): void {
    this.saveData.splice(index, 1); // splice - elimina 1 elemento en la posición del index

    console.log('Array Plants after deleting:', this.saveData);
  }

  // RESALTAR PLANTA
  public favorite(index: number): void {
    const plant = this.saveData[index];

    if (plant['favorite']) {
      plant['favorite'] = false;  // si está marcada, desmarcarla.
    } else {
      plant['favorite'] = true;   // Si no está marcada, marcarla.
    } 
  }
}
