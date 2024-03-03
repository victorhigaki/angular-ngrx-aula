import { Livro } from "./livro.model";

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
