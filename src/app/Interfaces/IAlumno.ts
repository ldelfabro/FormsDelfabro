import { Curso } from "./ICurso";

export interface Alumno {
    id : number,
    nombre : string,
    apellido : string,
    telefono : string,
    fechaNacimiento : Date,
    email : string,
    provincia : string,
    localidad : string,    
    perfil : string,
    Cursos : Curso []
}