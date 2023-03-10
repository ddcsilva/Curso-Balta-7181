import { Component } from '@angular/core';
import { Tarefa } from 'src/models/tarefa.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public modoVisualizacao = 'lista';
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

    this.carregar();
  }

  adicionar() {
    const id = this.listaTarefas.length + 1;
    const titulo = this.form.controls['titulo'].value;
    this.listaTarefas.push(new Tarefa(id, titulo, false));
    this.salvar();
    this.limpar();
    this.alterarModoVisualizacao('lista');
  }

  excluir(tarefa: Tarefa) {
    const index = this.listaTarefas.indexOf(tarefa);
    if (index !== -1) {
      this.listaTarefas.splice(index, 1);
    }
    this.salvar();
  }

  limpar() {
    this.form.reset();
  }

  marcarComoConcluido(tarefa: Tarefa) {
    tarefa.concluido = true;
    this.salvar();
  }

  marcarComoNaoConcluido(tarefa: Tarefa) {
    tarefa.concluido = false;
    this.salvar();
  }

  salvar() {
    const dados = JSON.stringify(this.listaTarefas);
    localStorage.setItem('listaTarefas', dados);
  }

  carregar() {
    const dados = localStorage.getItem('listaTarefas') || '[]';
    this.listaTarefas = JSON.parse(dados);
  }

  alterarModoVisualizacao(modoVisualizacao: string) {
    this.modoVisualizacao = modoVisualizacao;
  }
}
