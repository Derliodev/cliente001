import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../core/services/auth.service';

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

  constructor(private router: Router, private authService: AuthService){}


  login(){
    this.authService.login(this.username, this.password).subscribe(data =>{
      console.log(data);
      if(data.usuario){
        Swal.fire('Login!', `Bienvenido ${data.usuario.nombre}`, 'success').then(()=>{
          this.router.navigate(['lavado']);
        })
      }else{
        Swal.fire('Error!', data.error.error, 'error')
      }
    })
  }

}
