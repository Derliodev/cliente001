import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  logout: string | null = null;
  history: string | null = null;
  error: string = '';
  nombre: string = '';
  version: string | undefined = '1.0';

  constructor(private router: Router){}


  login(){
    Swal.fire('Login!', 'Ingreso correcto', 'success').then(()=>{
      this.router.navigate(['lavado']);
    })
  }

}
