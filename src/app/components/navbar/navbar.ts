import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html', // Verifica si tu archivo es navbar.html o navbar.component.html
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  // Lógica para el menú móvil (hamburguesa)
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}