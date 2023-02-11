import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducer";

export const loginStateSelector = (appState  : AppState) => appState.loginState;
export const loginStateUserSelector = createSelector(loginStateSelector, (loginState) => loginState.usuarioAutenticado)