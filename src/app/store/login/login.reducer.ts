import { createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/Interfaces/IUsuario";
import { desloguearUsuario, setUsuarioLogueado } from "./login.actions";

export interface LoginState { 
    usuarioAutenticado : Usuario | null

}

const initialState : LoginState = {
    usuarioAutenticado :  null
}

export const loginReducer = createReducer(initialState,
    on(setUsuarioLogueado, (oldState, data) => {
        const nuevoState : LoginState = {
            usuarioAutenticado :  data.usuarioLogueado
        };
        return nuevoState;
    }),
    on(desloguearUsuario, (oldSate) => {
        return initialState;
    })
);