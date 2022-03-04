import { Component } from '@angular/core';
import { Client } from './models/client.model';
import { Food } from './models/food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Select Input';

  clients = [
    { id: 1, nome: 'Anderson Júnior' },
    { id: 2, nome: 'Samuel Souza' },
    { id: 3, nome: 'Herdeson Muleque Doido' },
    { id: 4, nome: 'Larissa dos Mortal pra trás' }
  ];

  foods = [
    { id: 1, nome: 'Pizza' },
    { id: 2, nome: 'Pastel' },
    { id: 3, nome: 'Hamburguer' },
    { id: 4, nome: 'Bolo' }
  ];

  selectedClient: Client;
  selectedFood: Food;

  onChangeClient(event) {
    this.selectedClient = event.newSelectedObject;
    console.log('Cliente Selecionado: ', this.selectedClient.nome);
  }

  onChangeFood(event) {
    this.selectedFood = event.newSelectedObject;
    console.log('Comida Selecionada: ', this.selectedFood.nome);
  }

}
