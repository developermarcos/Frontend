import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { FormContatoViewModel } from '../view-model/form-contato.view.model';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styles: [
  ]
})
export class EditarContatoComponent implements OnInit {

  public contatoFormVM: FormContatoViewModel = new FormContatoViewModel();

  public formContato: FormGroup;
  constructor(
    titulo: Title,
    private contatoService: ContatoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    titulo.setTitle('Editar Contato - e-Agenda');
  }

  ngOnInit(): void {
    this.contatoFormVM = this.route.snapshot.data['contato'];

    this.formContato = this.fb.group({
      id: ['', [Validators.required]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
    });
    

    this.formContato.patchValue({
      id: this.route.snapshot.params['id'],
      nome: this.contatoFormVM.nome,
      email: this.contatoFormVM.email,
      telefone: this.contatoFormVM.telefone,
      empresa: this.contatoFormVM.empresa,
      cargo: this.contatoFormVM.cargo,
    });
  }
  get id() {
    return this.formContato.get('id');
  }
  
  get nome() {
    return this.formContato.get('nome');
  }

  get email() {
    return this.formContato.get('email');
  }

  get telefone() {
    return this.formContato.get('telefone');
  }
  get empresa() {
    return this.formContato.get('empresa');
  }

  get cargo() {
    return this.formContato.get('cargo');
  }

  gravar(){
    if (this.formContato.invalid) return;

    this.contatoFormVM = Object.assign({}, this.contatoFormVM, this.formContato.value);

    this.contatoService.editar(this.contatoFormVM.id, this.contatoFormVM)
      .subscribe({
        next: (contatoInserido) => this.processarSucesso(contatoInserido),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(contato: FormContatoViewModel): void {
    this.router.navigate(['/contatos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.log(erro);
    }
  }

}
