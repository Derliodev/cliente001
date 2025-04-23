import { FooterComponent } from '../../layout/footer/footer.component';
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [FooterComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  menuItems = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'clientes', label: 'Clientes' },
    { id: 'ubicacion', label: 'Ubicación' },
    { id: 'contacto', label: 'Contáctenos' }
  ];

  activeSection: string = 'nosotros';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + 100;

    for (let item of this.menuItems) {
      const section = document.getElementById(item.id);
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection = item.id;
      }
    }
  }

}
