import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livro } from '../livros/livro.model';
import { LivroService } from '../livros/livro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'angular-ngrx-aula';

  livroService = inject(LivroService);
  //livros: Livro[] = [];
  livros$ = this.livroService.obterLivrosApi();

  ngOnInit(): void {
    // this.livros = this.livroService.obterLivros();
  }
}
