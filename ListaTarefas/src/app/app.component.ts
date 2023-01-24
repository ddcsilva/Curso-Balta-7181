import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listaTarefas: any[] = [];

  constructor() {
    this.listaTarefas.push('Passear com o cachorro');
    this.listaTarefas.push('Ir ao supermercado');
    this.listaTarefas.push('Cortar o cabelo');
  }
}
