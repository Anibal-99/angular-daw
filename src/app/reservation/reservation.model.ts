import { Cliente, RawCliente } from "../client/models/client.model";
import { RawState, State } from "../state/models/state.model";
import { emptyCliente } from "../client/models/client.model";
import { emptyState } from "../state/models/state.model";

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
    client: RawCliente;
    state: RawState;
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
    cliente: Cliente;
    estado: State ;
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
    cliente: emptyCliente,
    estado: emptyState
}
