export interface RawResource {
    id: number;
    name: string;
    description: string;
    places?: any;
    // resource?: any;
}

export interface Resource {
    id: number;
    nombre: string;
    descripcion: string;
    lugar?: string; 
}

export const emptyResource: Resource = {
    id: 0,
    nombre: '',
    descripcion: '',
    lugar: '',
}