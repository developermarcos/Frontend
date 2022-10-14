import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { FormContatoViewModel } from '../view-model/form-contato.view.model';

@Component({
  selector: 'app-excluir-contato',
  templateUrl: './excluir-contato.component.html',
  styles: [
  ]
})
export class ExcluirContatoComponent implements OnInit {

  public contatoFormVM: FormContatoViewModel = new FormContatoViewModel();
  
  constructor(
    titulo: Title,
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    titulo.setTitle('Excluir Contato - e-Agenda');
  }
  ngOnInit(): void {
    this.contatoFormVM = this.route.snapshot.data['contato'];
  }

  get id() {
    return this.route.snapshot.params['id'].toString();
  }

  gravar(){
    this.contatoService.excluir(this.id)
    .subscribe({
      next: (contatoId) => this.processarSucesso(contatoId),
      error: (erro) => this.processarFalha(erro),
    });
  }
  processarFalha(erro: any): void {
    if(erro)
    console.error(erro);
  }
  processarSucesso(contatoId: string): void {
    this.router.navigate(['/contatos/listar']);
  }
}
