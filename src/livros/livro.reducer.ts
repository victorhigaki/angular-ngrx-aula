import { createReducer, on } from "@ngrx/store";
import { Livro } from "./livro.model";
import { livroActions } from "./livro.actions";

enum LivroStatus {
    loading = 'loading',
    pending = 'pending',
    error = 'error',
    success = 'success',
}

export interface LivroState {
    livros: Livro[],
    error: '' | null,
    status: LivroStatus
}

const initialState: LivroState = {
    error: null,
    status: LivroStatus.pending,
    livros: []
}

export const LivroReducer = createReducer(
    initialState,
    on(livroActions.carregarLivros, (stateAtual) => {
        return {
            ...stateAtual,
            livros: livrosIniciais,
            status: LivroStatus.success
        }
    })
)

const livrosIniciais = [
    {
        id: 1,
        nome: 'Harry Potter'
    }, {
        id: 2,
        nome: 'Senhor dos Aneis'
    }
]