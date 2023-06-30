export interface RawPlace {
    id: number;
    name: string;
    resource?: any;
}

export interface Place {
    id: number;
    nombre: string;
    recurso?: any;
}

export const emptyPlace: Place = {
    id: 0,
    nombre: '',
    recurso: '',
}
