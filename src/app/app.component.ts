import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivroService } from '../livros/livro.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { livroActions } from '../livros/state/livro.actions';
import { livrosSelector } from '../livros/state/livro.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-aula';

  livroService = inject(LivroService);
  store = inject(Store);

  livros$ = this.store.select(livrosSelector)
  livroInput = '';

  ngOnInit(): void {
    this.store.dispatch(livroActions.carregarLivros());
  }

  adicionar() {
    this.store.dispatch(livroActions.adicionarLivros({
      id: 10,
      nome: this.livroInput
    }))
  }

  // ngOnInit(): void {
  //   this.livros = this.livroService.obterLivros();
  // }
}
