import { Client, ClientDto, emptyCliente } from "../client/client.model";
import { Place, PlaceDto, emptyPlace } from "../place/place.model";
import { StateDto, State, emptyState } from "../state/models/state.model";

/**
 * Interface DTO for request and response object
 * of the reservation resource
 */
export interface ReservationDto {
    id: number;
    title: string;
    date: string;
    ammount: number;
    reason: string;
    client?: ClientDto;
    state?: StateDto;
    place?: PlaceDto,
}


/**
 * Interface Domain for reservation
 */
export interface Reservation {
    id: number;
    titulo: string;
    razon: string;
    monto: number;
    fecha: string;
    cliente: Client;
    estado: State;
    espacio: Place;
}

/**
 * Empty object for initializing reservations
 */
export const emptyReservation: Reservation = {
    id: 0,
    titulo: '',
    razon: '',
    monto: 0,
    fecha: '',
    cliente: emptyCliente,
    estado: emptyState,
    espacio: emptyPlace,
}
