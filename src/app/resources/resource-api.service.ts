import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Resource, ResourceDto } from './resource.model';
import { ApiService } from '../api.service';

@Injectable()
export class ResourceApiService {
    constructor(private apiService: ApiService){}

    adaptResources(resources: ResourceDto[]): Resource[] {
        return resources.map(
            resource => ({
                id: resource.id,
                nombre: resource.name,
                descripcion: resource.description,
            } as Resource)
        )
    }

    getResources(): Observable<Resource[]> {
        return this.apiService.getResources().pipe(map(this.adaptResources));
    };

    addResources(resource: ResourceDto): Observable<any>{
        return this.apiService.addResoruces(resource);
    };

    editResources(id: number, resource: ResourceDto){
        return this.apiService.editResources(id, resource);
    }

    destroyResources(id: number){
        return this.apiService.destroyResources(id);
    }
}
