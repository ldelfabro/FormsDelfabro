import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/Interfaces/IUsuario";

export const setUsuarioLogueado = createAction('[LOGIN] Setear usuario',
    props<{ usuarioLogueado : Usuario}>()
)

export const desloguearUsuario = createAction('[LOGIN] Deslogeuar usuario')