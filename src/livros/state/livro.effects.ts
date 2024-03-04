import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LivroService } from "../livro.service";
import { map, switchMap, tap } from "rxjs";
import { inject } from "@angular/core";
import { livroActions } from "./livro.actions";

export const buscarLivroEffect = createEffect(
    (actions$ = inject(Actions), livroService = inject(LivroService)) => {
        return actions$
            .pipe(
                ofType(livroActions.carregarLivros),
                switchMap(() => livroService.obterLivrosApi()
                    .pipe(
                        map(livros => livroActions.livrosCarregadosSucesso({ livros }))
                    )
                )
            )
    }, { functional: true }
)