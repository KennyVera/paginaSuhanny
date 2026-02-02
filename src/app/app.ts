import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,      // Necesario para el <router-outlet>
    NavbarComponent,   // Necesario para el <app-navbar>
    FooterComponent    // Necesario para el <app-footer>
  ],
  templateUrl: './app.html', // O './app.html' según tu configuración
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'favorita';
}