import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProfessionalDashboardDb } from './dashboard-analytics';

import { ProjectsDashboardDb } from './dashboard-projects';

import { KarthikProfileFakeDb } from './karthik_profile';
import { AlbumSpecFakeDb } from './side-panel-spec';


export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            'professional-dashboard-widgets': ProfessionalDashboardDb.widgets,
            'projects-dashboard-listofProjects': ProjectsDashboardDb.projects,
            'projects-dashboard-data': ProjectsDashboardDb.projectsData,
            'profile-about': KarthikProfileFakeDb.about,
            'album-spec': AlbumSpecFakeDb.spec
        };
    }
}
