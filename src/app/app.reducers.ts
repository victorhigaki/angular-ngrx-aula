import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./state/app.state";
import { livroReducer } from '../livros/state/livro.reducer';

export const appReducers: ActionReducerMap<IAppState> = {
    livros: livroReducer
}