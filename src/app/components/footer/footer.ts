import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true, // Muy importante para que funcione con tu estructura actual
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent { // Cambiamos 'Footer' por 'FooterComponent'
  // Dato dinámico para el copyright de tu proyecto
  anioActual: number = new Date().getFullYear();
}