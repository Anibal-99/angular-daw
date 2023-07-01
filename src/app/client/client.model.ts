export interface ClientDto {
    id: number;
    name: string;
    surname: string;
    dni: number;
}

export interface Client {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
}

export const emptyCliente: Client = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: 0,
}