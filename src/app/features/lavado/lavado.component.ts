import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lavado',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './lavado.component.html',
  styleUrl: './lavado.component.css'
})
export class LavadoComponent {

  vehiculo = {
    fecha_ingreso : '10-04-2025 12:30:00',
    fecha_compromiso : '10-04-2025 18:00:0',
    fecha_fin : '',
    patente: 'LXXX63',
    marca: '',
    modelo: '',
    color: '',
    servicio: '',
    estado : false
  }

  constructor(){

  }

  iniciar(): void {
    Swal.fire({
      title: "Deseas iniciar el trabajo?",
      text: "El trabajo aparecera como iniciado!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: 'No, Cancelar!',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comenzar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Iniciado!",
          text: "El trabajo a comenzado!",
          icon: "success"
        }).then(()=>{
          this.vehiculo.estado = true;
        });
      }
    });
  }

  pausar(): void {
    Swal.fire({
      title: "Deseas pausar el trabajo?",
      text: "El trabajo aparecera como en pausa!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: 'No, Cancelar!',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Pausar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Pausado!",
          text: "El trabajo se a pausado!",
          icon: "success"
        }).then(()=>{
          this.vehiculo.estado = false;
        });
      }
    });


  }

}
