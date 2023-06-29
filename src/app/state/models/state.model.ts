export interface RawState {
    id: number;
    name: string;
    description: string;
}

export interface State {
    id: number;
    name: String;
}

export const emptyState: State = {
    id: 0,
    name:'',
}
