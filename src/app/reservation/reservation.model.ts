/**
 * Interface DTO for request and response object
 * of the reservation resource
 */
export interface RawReservation {
    id: number;
    title: string;
    date: string;
    ammount: number;
    reason: string;
    client?: any;
    state?: any;
}


/**
 * Interface Domain for reservation
 */
export interface Reserva {
    id: number;
    titulo: string;
    razon: string;
    monto: number;
    fecha: string;
}

/**
 * Empty object for initializing reservations
 */
export const emptyReserva: Reserva = {
    id: 0,
    titulo: '',
    razon: '',
    monto: 0,
    fecha: '',
}