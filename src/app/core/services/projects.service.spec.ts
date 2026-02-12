import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  it('returns at least one project', () => {
    const service = new ProjectsService();
    expect(service.getProjects().length).toBeGreaterThan(0);
  });
});
