import { Component } from '@angular/core';
import { Tarefa } from 'src/models/tarefa.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listaTarefas: Tarefa[] = [];
  public titulo: String = "Minhas tarefas";
  public form: FormGroup = new FormGroup('');

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  adicionar() {
    const id = this.listaTarefas.length + 1;
    const titulo = this.form.controls['titulo'].value;
    this.listaTarefas.push(new Tarefa(id, titulo, false));
    this.salvar();
    this.limpar();
  }

  excluir(tarefa: Tarefa) {
    const index = this.listaTarefas.indexOf(tarefa);
    if (index !== -1) {
      this.listaTarefas.splice(index, 1);
    }
  }

  limpar() {
    this.form.reset();
  }

  marcarComoConcluido(tarefa: Tarefa) {
    tarefa.concluido = true;
  }

  marcarComoNaoConcluido(tarefa: Tarefa) {
    tarefa.concluido = false;
  }

  salvar() {
    const dados = JSON.stringify(this.listaTarefas);
    localStorage.setItem('listaTarefas', dados);
  }
}
