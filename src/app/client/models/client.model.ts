export interface RawCliente {
    id: number;
    name: string;
    surname: string;
    dni: number;
}

export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
}

export const emptyCliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: 0,
}