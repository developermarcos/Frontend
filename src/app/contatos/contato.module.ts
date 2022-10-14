import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoAppComponent } from './contato-app.component';
import { ListarContatosComponent } from './listar/listar-contatos.component';
import { ContatoService } from './services/contato.service';
import { InserirContatoComponent } from './inserir/inserir-contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarContatoComponent } from './editar/editar-contato.component';
import { VisualizarContatoResolver } from './services/visualizar-contato.resolver';
import { ExcluirContatoComponent } from './excluir/excluir-contato.component';
import { FormContatoResolver } from './services/form-contato.resolver';


@NgModule({
  declarations: [
    ContatoAppComponent,
    ListarContatosComponent,
    InserirContatoComponent,
    EditarContatoComponent,
    ExcluirContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    ContatoService,
    FormContatoResolver,
    VisualizarContatoResolver
  ]
})
export class ContatoModule { }
