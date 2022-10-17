import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompromissoRoutingModule } from './compromisso-routing.module';
import { CompromissoAppComponent } from './compromisso-app.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso.component';
import { CompromissoService } from './services/compromisso.service';
import { InserirCompromissoComponent } from './inserir/inserir-compromisso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContatoService } from '../contatos/services/contato.service';


@NgModule({
  declarations: [
    CompromissoAppComponent,
    ListarCompromissoComponent,
    InserirCompromissoComponent
  ],
  imports: [
    CommonModule,
    CompromissoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers:[
    CompromissoService,
    ContatoService
  ]
})
export class CompromissoModule { }
