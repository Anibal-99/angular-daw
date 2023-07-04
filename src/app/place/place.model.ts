import { Resource, ResourceDto, emptyResource } from "../resources/resource.model";

export interface PlaceDto {
    id: number;
    name: string;
    resource: ResourceDto;
}

export interface Place {
    id: number;
    nombre: string;
    recurso: Resource;
}

export const emptyPlace: Place = {
    id: 0,
    nombre: '',
    recurso: emptyResource,
}
