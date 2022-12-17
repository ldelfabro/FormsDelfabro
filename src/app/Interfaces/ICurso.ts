import { Alumno } from "./IAlumno";
import { Materia } from "./IMateria";
import { Nota } from "./INotas";
import { Profesor } from "./IProfesor";

export interface Curso {
    id : number,
    nombre : string,
    alumnos : Alumno [],
    materias : Materia[],
    notas : Nota [],
    profesor : Profesor,
}