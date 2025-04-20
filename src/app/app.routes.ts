import { Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { LavadoComponent } from './features/lavado/lavado.component';

export const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'lavado', component: LavadoComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];
