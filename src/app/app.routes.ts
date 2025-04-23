import { Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { LavadoComponent } from './features/lavado/lavado.component';
import { AgendaComponent } from './features/agenda/agenda.component';

export const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'lavado', component: LavadoComponent
  },
  {
    path: 'agenda', component: AgendaComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];
