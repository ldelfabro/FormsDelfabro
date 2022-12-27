export interface Localidades {
    cantidad:    number;
    inicio:      number;
    localidades: Localidad[];
    parametros:  Parametros;
    total:       number;
}

export interface Localidad {
    id:     string;
    nombre: string;
}

export interface Parametros {
    campos:    string[];
    max:       number;
    nombre:    string;
    provincia: string;
}
