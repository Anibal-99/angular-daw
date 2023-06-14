export interface RawReservation {
    id: number;
    title: string;
    time: string;
    ammount: number;
    reason: string;
    client?: any;
    state?: any;
}

export interface Reserva {
    id: number;
    titulo: string;
    razon: string;
    monto: number;
    fecha: string;
}

export const emptyReserva: Reserva = {
    id: 0,
    titulo: '',
    razon: '',
    monto: 0,
    fecha: '',
}