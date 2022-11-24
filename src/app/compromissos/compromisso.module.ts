import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { CompromissoRoutingModule } from './compromisso-routing.module';
import { CompromissoAppComponent } from './compromisso-app.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso.component';
import { CompromissoService } from './services/compromisso.service';
import { InserirCompromissoComponent } from './inserir/inserir-compromisso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContatoService } from '../contatos/services/contato.service';
import { EditarCompromissoComponent } from './editar/editar-compromisso.component';
import { FormCompromissoResolver } from './services/form-compromisso.resolver';

import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    CompromissoAppComponent,
    ListarCompromissoComponent,
    InserirCompromissoComponent,
    EditarCompromissoComponent
  ],
  imports: [
    CommonModule,
    CompromissoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers:[
    CompromissoService,
    ContatoService,
    FormCompromissoResolver,
    {provide: LOCALE_ID, useValue: 'pt'}
  ]
})
export class CompromissoModule { }
