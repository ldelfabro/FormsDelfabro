import { Alumno } from "./IAlumno";
import { Materia } from "./IMateria";
import { Nota } from "./INotas";
import { Profesor } from "./IProfesor";

export interface Curso {
    id : number,
    nombre : string,
    comision : string,
    descripcion : string,
    alumnos : Alumno [],
    materias : Materia[],
    profesores : Profesor [],
    notas : Nota [],
    profesor : Profesor,
}