import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { ContatoAppComponent } from './contato-app.component';
import { ListarContatosComponent } from './listar/listar-contatos.component';

const routes: Routes = [
  {
    path:'',
    canActivate: [AuthGuard],
    component: ContatoAppComponent,
    children:[
      {path:'', redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component: ListarContatosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
