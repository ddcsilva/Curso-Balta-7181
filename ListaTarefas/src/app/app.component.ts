import { Component } from '@angular/core';
import { Tarefa } from 'src/models/tarefa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listaTarefas: Tarefa[] = [];
  public titulo: String = "Minhas tarefas";

  constructor() {
    this.listaTarefas.push(new Tarefa(1, 'Passear com o cachorro', false));
    this.listaTarefas.push(new Tarefa(2, 'Ir ao supermercado', false));
    this.listaTarefas.push(new Tarefa(3, 'Cortar o cabelo', true));
  }

  excluirTarefa(tarefa: Tarefa) {
    const index = this.listaTarefas.indexOf(tarefa);
    if (index !== -1) {
      this.listaTarefas.splice(index, 1);
    }
  }

  marcarComoConcluido(tarefa: Tarefa) {
    tarefa.concluido = true;
  }

  marcarComoNaoConcluido(tarefa: Tarefa) {
    tarefa.concluido = false;
  }
}
