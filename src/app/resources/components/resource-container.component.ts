import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { Observable, of } from 'rxjs';
import { ResourceApiService } from '../service/resource-api.service';

@Component({
    selector: 'app-resource',
    templateUrl: './resource-container.component.html',
    providers: [ResourceApiService]
})

export class ResourceContainerComponent implements OnInit {
    constructor(private resourceApiService: ResourceApiService) {}
    resources$: Observable<Resource[]> = of([]);

    ngOnInit(): void {
        this.resources$ = this.resourceApiService.getResources();
    }
}
