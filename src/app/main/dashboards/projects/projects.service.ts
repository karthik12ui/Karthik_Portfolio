import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsDashboardService implements Resolve<any> {
    listOfProjects: any[];
    projectsData: any;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getListOfProjects(),
                this.geProjectsData()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get projects
     *
     * @returns {Promise<any>}
     */
    getListOfProjects(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/projects-dashboard-listofProjects')
                .subscribe((response: any) => {
                    this.listOfProjects = response;
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    geProjectsData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/projects-dashboard-data')
                .subscribe((response: any) => {
                    this.projectsData = response;
                    resolve(response);
                }, reject);
        });
    }
}
