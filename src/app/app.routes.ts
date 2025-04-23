import { Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { LavadoComponent } from './features/lavado/lavado.component';
import { AgendaComponent } from './features/agenda/agenda.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      {
        path: '', component: LavadoComponent
      },
      {
        path: 'agenda', component: AgendaComponent
      },
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];
