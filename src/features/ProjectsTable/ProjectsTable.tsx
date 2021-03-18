import * as React from 'react';
import ProjectsTableHeader from './ProjectsTableHeader';
import ProjectsTableBody from './ProjectsTableBody';
import useSort from '../../hooks/useSort';
import projects from '../../data/projects';
import './ProjectsTable.scss';

export const projectsTableColumns = [
  'project',
  'links',
  'publisher',
  'developer',
  'release',
];

const initialSortBy = { column: 'year', reverse: false };
const ProjectsTableContext = React.createContext({
  handleSort: () => {},
  sortBy: initialSortBy,
});

const ProjectsTable = () => {
  const { handleSort, sortBy } = useSort(initialSortBy);
  return (
    <ProjectsTableContext.Provider value={{ handleSort, sortBy }}>
      <table className="ProjectsTable">
        <ProjectsTableHeader columns={projectsTableColumns} />
        <ProjectsTableBody columns={projectsTableColumns} projects={projects} />
      </table>
    </ProjectsTableContext.Provider>
  );
};

export default ProjectsTable;
