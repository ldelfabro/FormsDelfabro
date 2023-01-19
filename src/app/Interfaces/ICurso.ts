import { Alumno } from "./IAlumno";
import { Materia } from "./IMateria";
import { Nota } from "./INotas";
import { Usuario } from "./IUsuario";

export interface Curso {
    id : number,
    nombre : string,
    comision : string,
    descripcion : string,
    alumnos : Alumno [],
    materias : Materia[],
    usuarios : Usuario [],
    notas : Nota [],
    profesor : Usuario,
}