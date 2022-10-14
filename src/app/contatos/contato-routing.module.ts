import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { ContatoAppComponent } from './contato-app.component';
import { InserirContatoComponent } from './inserir/inserir-contato.component';
import { ListarContatosComponent } from './listar/listar-contatos.component';

const routes: Routes = [
  {
    path:'',
    canActivate: [AuthGuard],
    component: ContatoAppComponent,
    children:[
      {path:'', redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component: ListarContatosComponent},
      {path:'inserir', component: InserirContatoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
