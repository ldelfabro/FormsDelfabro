import { Alumno } from "./IAlumno";
import { Curso } from "./ICurso";
import { Usuario } from "./IUsuario";

export interface Inscripcion {
    id : number,
    fechaInscripcion : Date,
    IdAlumno : number,
    Alumno : Alumno,
    IdCurso: number;
    Curso : Curso,
    IdUsuarioInscripcion : number,
    UsuarioInscripcion : Usuario
}