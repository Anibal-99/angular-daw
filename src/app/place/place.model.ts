import { Resource, ResourceDto, emptyResource } from "../resources/resource.model";

export interface PlaceDto {
    id: number;
    name: string;
    resources: Array<ResourceDto>;
}

export interface Place {
    id: number;
    nombre: string;
    recursos: Array<Resource>;
}

export const emptyPlace: Place = {
    id: 0,
    nombre: '',
    recursos: [],
}
