import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livro = input.required<Livro>();

  alterarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
