import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  
  // Características del producto
  features = [
    {
      icon: 'leaf',
      title: 'Light & Healthy',
      description: 'Ideal for everyday cooking',
      color: 'green'
    },
    {
      icon: 'vitamin',
      title: 'Rich in Vitamin E',
      description: 'Supports a healthy lifestyle',
      color: 'yellow'
    },
    {
      icon: 'quality',
      title: 'Premium Quality',
      description: 'Trusted sunflower oil',
      color: 'green'
    }
  ];

  // Información de contacto
  contactInfo = {
    email: 'info@lafavorita.com',
    phone: '+91 9876543210'
  };

  ngOnInit(): void {
    // Aquí podrías cargar datos dinámicos del backend
    // Por ejemplo: promociones, testimonios, etc.
    this.initAnimations();
  }

  /**
   * Inicializa las animaciones cuando los elementos son visibles
   */
  private initAnimations(): void {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observar elementos que queremos animar
      setTimeout(() => {
        const elements = document.querySelectorAll('.grid > div, section');
        elements.forEach(el => observer.observe(el));
      }, 100);
    }
  }

  /**
   * Navega a la sección de contacto con scroll suave
   */
  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Tracking de clics en botones (útil para analytics)
   */
  trackButtonClick(buttonName: string): void {
    console.log(`Button clicked: ${buttonName}`);
    // Aquí podrías enviar eventos a Google Analytics o similar
    // this.analyticsService.trackEvent('button_click', buttonName);
  }
}