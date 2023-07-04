import { Injectable } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { StateDto, State } from "../models/state.model";
import { Observable, map } from "rxjs";

@Injectable()
export class StateApiService{
    constructor(private apiService: ApiService){}

    adaptState(states: StateDto[]): State[] {
        return states.map(
            state => ({
                id: state.id,
                nombre: state.name,
                description: state.description,
            } as State)
        )
    }

    getState(): Observable<State[]> {
        return this.apiService.getStates().pipe(map(this.adaptState));
    };
}
