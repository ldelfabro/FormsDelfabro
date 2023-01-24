import { Alumno } from "./IAlumno";

export interface Curso {
    id : number,
    nombre : string,
    comision : string,
    descripcion : string,
    cantidadHoras : number,
    cantidadClases : number,
    profesor : string //profesor asignado
}