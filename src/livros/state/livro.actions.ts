import { createAction, props } from "@ngrx/store";
import { Livro } from "../livro.model";

const carregarLivros = createAction('[Livros] Carregar Livros');
const livrosCarregadosSucesso = createAction(
    '[Livros] Livros Carregados Sucesso', props<{ livros: Livro[] }>())

export const livroActions = {
    carregarLivros,
    livrosCarregadosSucesso
}