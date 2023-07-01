export interface ResourceDto {
    id: number;
    name: string;
    description: string;
}

export interface Resource {
    id: number;
    nombre: string;
    descripcion: string;
}

export const emptyResource: Resource = {
    id: 0,
    nombre: '',
    descripcion: '',
}
