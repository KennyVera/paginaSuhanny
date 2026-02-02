import { Routes } from '@angular/router';
// Importamos los componentes de la carpeta 'pages'
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import { ExportIndiaComponent } from './pages/export-india/export-india';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    title: 'La Favorita - Inicio' 
  },
  { 
    path: 'nosotros', 
    component: AboutComponent, 
    title: 'Sobre Nosotros - La Favorita' 
  },
  { 
    path: 'productos', 
    component: ProductsComponent, 
    title: 'Nuestros Productos - La Favorita' 
  },
  { 
    path: 'exportacion', 
    component: ExportIndiaComponent, 
    title: 'Exportación a India - La Favorita' 
  },
  // Ruta comodín: si el usuario escribe cualquier otra cosa, lo manda al Inicio
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];