import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

import { AlbumSidebarService } from '../../../../@album/components/sidebar/sidebar.service';
import { ProjectsDashboardService } from './projects.service';

import { albumAnimations } from '../../../../@album/animations';
import { MyService } from '../../../fake-db/shared-db.service';
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : albumAnimations,
})
export class ProjectsComponent implements OnInit {
    listOfProjects: any[];
    selectedProject: any;
    teamMembers: any = {};
    projectsData: any;
    widget6: any = {};
    dateNow = Date.now();
projectSelectOnDashboard: any;
    /**
     * Constructor
     *
     * @param {AlbumSidebarService} _albumSidebarService
     * @param {ProjectDashboardService} _projectDashboardService
     * @param {MyService} myService
     */
    constructor(
        private _albumSidebarService: AlbumSidebarService,
        private _projectDashboardService: ProjectsDashboardService,
        private _myService: MyService,

    ) {
    }

      // -----------------------------------------------------------------------------------------------------
    // @ Load widgets
    // -----------------------------------------------------------------------------------------------------
    public loadwidget() {
        this.widget6 = {
            currentProject : this.projectsData.widget6.currentProject,
            legend       : false,
            explodeSlices: false,
            labels       : true,
            doughnut     : true,
            gradient     : false,
            scheme       : {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#D48D34' , '#4D4E62', '#8E9ADA'],
            },
            onSelect     : (ev) => {
            }
        };
        this.teamMembers.onContactsChanged = new BehaviorSubject({});
        this.teamMembers.onContactsChanged.next(this.projectsData.teamMembers.table.rows);
        this.teamMembers.dataSource = new FilesDataSource(this.teamMembers);
}

    /**
     * On init
     */
    ngOnInit(): void {
        this.listOfProjects = this._projectDashboardService.listOfProjects;
        this.projectSelectOnDashboard = this._myService.id;
        if (!!this.projectSelectOnDashboard && this.projectSelectOnDashboard !== null) {
            const project = this._projectDashboardService.listOfProjects.filter(fi => fi.id === this.projectSelectOnDashboard);
            this.selectedProject = project[0];
        } else {
            this.selectedProject = this.listOfProjects[0];
        }
        this.selectedProjectFromList(this.selectedProject);
        this._myService.id = undefined;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the sidebar
     *
     * @param name
     */

     projectDataBasedOnSelection(project) {
        this.selectedProject = project;
        const filteredProject = this._projectDashboardService.projectsData.projects.filter(fi => fi.projectId === project.id);
        this.projectsData = filteredProject[0];
        console.log(this.projectSelectOnDashboard, '--test');
        // this._myService.clearMessage();
        this.loadwidget();
     }

    selectedProjectFromList(project): void {
       this.projectDataBasedOnSelection(project);
    }

    refranceSelected(url) {
        window.open(url, '_blank');
    }
}

export class FilesDataSource extends DataSource<any> {
    constructor(private _widget11) {
        super();
    }
    connect(): Observable<any[]> {
        return this._widget11.onContactsChanged;
    }
    disconnect(): void {
    }
  }
