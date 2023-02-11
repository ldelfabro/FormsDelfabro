import { ActionReducerMap } from "@ngrx/store";
import { loginReducer, LoginState } from "./login/login.reducer";

export interface AppState {
    loginState : LoginState
}

export const appReducer : ActionReducerMap <AppState> = {
    loginState : loginReducer
}