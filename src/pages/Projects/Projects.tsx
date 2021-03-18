import * as React from 'react';
import { Third } from '../../components';
import { ProjectsTable } from '../../features';
import './Projects.scss';

const Projects = () => (
  <div className="Projects">
    <Third>
      <ProjectsTable />
    </Third>
  </div>
);

export default Projects;
