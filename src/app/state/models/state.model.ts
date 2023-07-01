export interface RawState {
    id: number;
    name: string;
    description: string;
}

export interface State {
    id: number;
    nombre: String;
}

export const emptyState: State = {
    id: 0,
    nombre:'',
}
