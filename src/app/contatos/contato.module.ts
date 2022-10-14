import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoAppComponent } from './contato-app.component';
import { ListarContatosComponent } from './listar/listar-contatos.component';
import { ContatoService } from './services/contato.service';


@NgModule({
  declarations: [
    ContatoAppComponent,
    ListarContatosComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule
  ],
  providers:[
    ContatoService
  ]
})
export class ContatoModule { }
