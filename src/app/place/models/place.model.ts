export interface RawClient {
    id: number;
    name: string;
    resource?: any;
}

export interface Client {
    id: number;
    nombre: string;
    recurso?: any;
}

export const emptyClient: Client = {
    id: 0,
    nombre: '',
    recurso: '',
}