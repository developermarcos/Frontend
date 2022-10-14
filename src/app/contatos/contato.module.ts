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


@NgModule({
  declarations: [
    ContatoAppComponent,
    ListarContatosComponent,
    InserirContatoComponent,
    EditarContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    ContatoService,
    VisualizarContatoResolver
  ]
})
export class ContatoModule { }
