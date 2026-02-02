import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit, OnDestroy {

  // ============================================
  // PROPIEDADES DEL COMPONENTE
  // ============================================

  /**
   * Valores de la empresa en hindi
   */
  values = [
    {
      icon: '🌿',
      title: 'प्राकृतिक शुद्धता',
      titleEn: 'Natural Purity',
      description: 'कोई अनावश्यक एडिटिव्स नहीं, केवल सूरजमुखी का सार।',
      color: 'from-[#f5a623] to-yellow-300'
    },
    {
      icon: '🤝',
      title: 'ईमानदारी',
      titleEn: 'Integrity',
      description: 'हमारे आपूर्तिकर्ताओं और ग्राहकों के साथ पारदर्शी संबंध।',
      color: 'from-[#f5a623] to-yellow-300'
    },
    {
      icon: '🌎',
      title: 'वैश्विक गुणवत्ता',
      titleEn: 'Global Quality',
      description: 'प्रमाणपत्र जो किसी भी सीमा पर हमारे उत्पाद का समर्थन करते हैं।',
      color: 'from-[#2d5f3f] to-green-400'
    }
  ];

  /**
   * Características destacadas para el mercado indio
   */
  indiaFeatures = [
    {
      icon: '🇮🇳',
      title: 'भारतीय रसोई के लिए',
      description: 'पारंपरिक व्यंजनों के लिए आदर्श'
    },
    {
      icon: '✓',
      title: 'प्रमाणित गुणवत्ता',
      description: 'अंतर्राष्ट्रीय मानकों के अनुसार'
    },
    {
      icon: '💚',
      title: 'स्वस्थ परिवार',
      description: 'विटामिन ई से भरपूर'
    }
  ];

  /**
   * Beneficios del producto
   */
  benefits = [
    {
      icon: '✨',
      title: '100% शुद्ध',
      description: 'कोई मिलावट नहीं',
      bgColor: 'bg-green-100'
    },
    {
      icon: '🏆',
      title: 'प्रीमियम ग्रेड',
      description: 'उच्चतम गुणवत्ता',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: '🔬',
      title: 'प्रयोगशाला परीक्षित',
      description: 'प्रमाणित सुरक्षा',
      bgColor: 'bg-green-100'
    },
    {
      icon: '📦',
      title: 'सुरक्षित पैकेजिंग',
      description: 'ताजगी की गारंटी',
      bgColor: 'bg-yellow-100'
    }
  ];

  /**
   * Información de la compañía
   */
  companyInfo = {
    mission: {
      hi: 'उच्चतम शुद्धता वाले वनस्पति तेलों के साथ स्वस्थ पोषण प्रदान करना।',
      en: 'Provide healthy nutrition with vegetable oils of the highest purity.'
    },
    vision: {
      hi: 'एशियाई बाजार में सूरजमुखी तेल निर्यात की अग्रणी ब्रांड बनना।',
      en: 'Become the leading sunflower oil export brand in the Asian market.'
    },
    targetMarkets: ['Mumbai', 'New Delhi', 'Bangalore', 'Chennai', 'Kolkata'],
    foundedYear: 2020,
    certifications: ['ISO 9001', 'HACCP', 'Organic Certified']
  };

  // Observer para animaciones de scroll
  private intersectionObserver?: IntersectionObserver;

  // ============================================
  // LIFECYCLE HOOKS
  // ============================================

  ngOnInit(): void {
    // Inicializar animaciones de scroll
    this.initScrollAnimations();
    
    // Aquí podrías cargar datos dinámicos del backend
    // this.loadCompanyData();
    
    // Log de información (útil para debugging)
    this.logComponentInfo();
  }

  ngOnDestroy(): void {
    // Limpiar observer al destruir el componente
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  // ============================================
  // MÉTODOS PRIVADOS
  // ============================================

  /**
   * Inicializa las animaciones cuando los elementos son visibles en el viewport
   */
  private initScrollAnimations(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              // Opcional: dejar de observar después de animar
              // this.intersectionObserver?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Observar elementos que queremos animar
      setTimeout(() => {
        const elements = document.querySelectorAll('.group, section > div');
        elements.forEach(el => this.intersectionObserver?.observe(el));
      }, 100);
    }
  }

  /**
   * Log de información del componente (útil para debugging)
   */
  private logComponentInfo(): void {
    if (typeof console !== 'undefined') {
      console.log('📄 About Component Loaded');
      console.log('🌍 Target Markets:', this.companyInfo.targetMarkets);
      console.log('🏆 Values Count:', this.values.length);
    }
  }

  // ============================================
  // MÉTODOS PÚBLICOS
  // ============================================

  /**
   * Navega a la sección de exportación con scroll suave
   */
  goToExportSection(): void {
    // Este método puede ser llamado desde el template si es necesario
    const exportSection = document.getElementById('export');
    if (exportSection) {
      exportSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Tracking de clicks en botones (útil para analytics)
   */
  trackButtonClick(buttonName: string): void {
    console.log(`Button clicked: ${buttonName}`);
    // Aquí podrías integrar con Google Analytics o similar
    // this.analyticsService.trackEvent('button_click', { button: buttonName });
  }

  /**
   * Obtiene el título de un valor en el idioma actual
   * (útil si implementas internacionalización)
   */
  getValueTitle(value: any, language: 'hi' | 'en' = 'hi'): string {
    return language === 'hi' ? value.title : value.titleEn;
  }

  /**
   * Scroll suave al inicio de la página
   */
  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  // ============================================
  // MÉTODOS PARA FUTURA INTEGRACIÓN CON BACKEND
  // ============================================

  /**
   * Carga datos de la compañía desde el backend
   * (comentado por ahora, para uso futuro)
   */
  /*
  private async loadCompanyData(): Promise<void> {
    try {
      // const data = await this.companyService.getAboutInfo();
      // this.companyInfo = data;
      // this.values = data.values;
    } catch (error) {
      console.error('Error loading company data:', error);
    }
  }
  */

  /**
   * Envía formulario de contacto para distribuidores
   * (comentado por ahora, para uso futuro)
   */
  /*
  async submitDistributorForm(formData: any): Promise<void> {
    try {
      // await this.distributorService.submit(formData);
      // Mostrar mensaje de éxito
    } catch (error) {
      console.error('Error submitting form:', error);
      // Mostrar mensaje de error
    }
  }
  */
}