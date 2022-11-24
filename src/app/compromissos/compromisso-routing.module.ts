import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { CompromissoAppComponent } from './compromisso-app.component';
import { EditarCompromissoComponent } from './editar/editar-compromisso.component';
import { InserirCompromissoComponent } from './inserir/inserir-compromisso.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso.component';
import { FormCompromissoResolver } from './services/form-compromisso.resolver';

const routes: Routes = [
  {
    path:'',
    canActivate:[AuthGuard],
    component: CompromissoAppComponent,
    children:[
      {path:'', redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component: ListarCompromissoComponent},
      {path:'inserir', component: InserirCompromissoComponent},
      {
        path:'editar/:id', 
        component: EditarCompromissoComponent, 
        resolve: {compromisso: FormCompromissoResolver}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompromissoRoutingModule { }
