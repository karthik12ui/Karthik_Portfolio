/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsDashboardService } from './projects.service';
describe('Service: Projects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsDashboardService]
    });
  });

  it('should ...', inject([ProjectsDashboardService], (service: ProjectsDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
