import { Component, OnInit } from '@angular/core';
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

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatos$ = this.contatoService.selecionarTodos();
  }

}
