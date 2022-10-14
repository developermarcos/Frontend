import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ContatoService } from '../services/contato.service';
import { ListarContatoViewModel } from '../view-model/ListarContatoViewModel';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styles: [
  ]
})
export class ListarContatosComponent implements OnInit {

  contatos$: Observable<ListarContatoViewModel[]>;

  constructor(titulo: Title,private contatoService: ContatoService) { 
    titulo.setTitle("Listar Contato - e-Agenda");
  }

  ngOnInit(): void {
    this.contatos$ = this.contatoService.selecionarTodos();
  }

}
