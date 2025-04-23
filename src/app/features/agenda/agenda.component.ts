import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  semanaActual = 0;
  dias: Date[] = [];
  horas: string[] = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  bloqueSeleccionado: { dia: string, hora: string } | null = null;

  permitirSabados: boolean = true;
  permitirDomingos: boolean = false;

  constructor() {
    this.generarSemana();
  }

  get rangoSemana(): string {
    const inicio = this.dias[0];
    const fin = this.dias[6];
    const diaInicio = inicio.getDate();
    const diaFin = fin.getDate();
    const mes = fin.toLocaleString('es-CL', { month: 'long' });
    const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
    const anio = fin.getFullYear();
    return `Del ${diaInicio} al ${diaFin} de ${mesCapitalizado} del ${anio}`;
  }

  getNombreDia(dia: Date): string {
    const nombre = dia.toLocaleDateString('es-CL', { weekday: 'long' });
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }

  generarSemana() {
    const hoy = new Date();
    const primerDia = new Date(hoy.setDate(hoy.getDate() - hoy.getDay() + 1 + this.semanaActual * 7)); // Lunes
    this.dias = Array.from({ length: 7 }, (_, i) => {
      const dia = new Date(primerDia);
      dia.setDate(primerDia.getDate() + i);
      return dia;
    });
  }

  cambiarSemana(direccion: number) {
    this.semanaActual += direccion;
    this.generarSemana();
    this.bloqueSeleccionado = null;
  }

  seleccionarBloque(dia: Date, hora: string) {


    const diaStr = dia.toDateString();
    if (this.bloqueSeleccionado?.dia === diaStr && this.bloqueSeleccionado.hora === hora) {
      this.bloqueSeleccionado = null;
    } else {
      this.bloqueSeleccionado = { dia: diaStr, hora };
      console.log(this.bloqueSeleccionado);
    }
  }

  esSeleccionado(dia: Date, hora: string): boolean {
    return this.bloqueSeleccionado?.dia === dia.toDateString() && this.bloqueSeleccionado?.hora === hora;
  }

}
