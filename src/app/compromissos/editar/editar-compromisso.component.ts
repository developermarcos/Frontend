import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from 'src/app/contatos/services/contato.service';
import { ListarContatoViewModel } from 'src/app/contatos/view-model/ListarContatoViewModel';
import { CompromissoService } from '../services/compromisso.service';
import { FormCompromissoViewModel } from '../view-model/form-compromisso.view.model';
import { TipoLocalCompromissoEnum } from '../view-model/tipo-local-compromisso.enum';

@Component({
  selector: 'app-editar-compromisso',
  templateUrl: './editar-compromisso.component.html',
  styles: [
  ]
})
export class EditarCompromissoComponent implements OnInit {

  public formCompromisso : FormGroup;
  public tiposLocais = Object.values(TipoLocalCompromissoEnum)
    .filter(v => !Number.isFinite(v));
  
  public contatos$: Observable<ListarContatoViewModel[]> | any;

  public formCompromissoVM: FormCompromissoViewModel = new FormCompromissoViewModel();
  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private compromissoService: CompromissoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.formCompromissoVM = this.route.snapshot.data['compromisso'];
    this.formCompromissoVM.id = this.route.snapshot.params['id'];

    this.contatos$ = this.contatoService.selecionarTodos();

    this.formCompromisso = this.formBuilder.group({
      assunto: ['', [Validators.required, Validators.minLength(3)]],
      tipoLocal: ['', [Validators.required]],
      local: ['', [Validators.required]],
      contatoId: ['', [Validators.required]],
      link: ['', [Validators.required]],
      data: [formatDate(new Date(), "dd/MM/yyyy", "pt"), [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaTermino: ['', [Validators.required]],
    });

    this.formCompromisso.patchValue({
      id: this.formCompromissoVM.id,
      assunto: this.formCompromissoVM.assunto,
      tipoLocal: this.formCompromissoVM.tipoLocal,
      local: this.formCompromissoVM.local,
      contatoId: this.formCompromissoVM.contatoId,
      link: this.formCompromissoVM.link,
      data: new Date(),
      horaInicio: this.formCompromissoVM.horaInicio,
      horaTermino: this.formCompromissoVM.horaTermino
    });
  }

  get id() {
    return this.formCompromisso.get('id');
  }
  get assunto() {
    return this.formCompromisso.get('assunto');
  }
  get local() {
    return this.formCompromisso.get('local');
  }
  get tipoLocal() {
    return this.formCompromisso.get('tipoLocal');
  }
  get link() {
    return this.formCompromisso.get('link');
  }
  get data() {
    return this.formCompromisso.get('data');
  }
  get contatoId() {
    return this.formCompromisso.get('contatoId');
  }
  get contato() {
    return this.formCompromisso.get('contato');
  }
  get horaInicio() {
    return this.formCompromisso.get('horaInicio');
  }
  get horaTermino() {
    return this.formCompromisso.get('horaTermino');
  }

  public gravar() {
    if (this.formCompromisso.invalid) return;

    this.formCompromissoVM = Object.assign({}, this.formCompromissoVM, this.formCompromisso.value);

    this.compromissoService.editar(this.formCompromissoVM)
      .subscribe({
        next: (compromissoEditado) => this.processarSucesso(compromissoEditado),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(compromisso: FormCompromissoViewModel): void {
    this.router.navigate(['/compromissos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.log(erro);
    }
  }

}
