import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { ContatoAppComponent } from './contato-app.component';
import { EditarContatoComponent } from './editar/editar-contato.component';
import { InserirContatoComponent } from './inserir/inserir-contato.component';
import { ListarContatosComponent } from './listar/listar-contatos.component';
import { VisualizarContatoResolver } from './services/visualizar-contato.resolver';

const routes: Routes = [
  {
    path:'',
    canActivate: [AuthGuard],
    component: ContatoAppComponent,
    children:[
      {path:'', redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component: ListarContatosComponent},
      {path:'inserir', component: InserirContatoComponent},
      {
        path:'editar/:id', 
        component: EditarContatoComponent, 
        resolve: {contato: VisualizarContatoResolver}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
