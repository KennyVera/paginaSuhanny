import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  // Aquí podrías definir un objeto con los datos técnicos si quisieras
  // que fueran dinámicos desde el backend en el futuro.
}