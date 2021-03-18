import * as React from 'react';
import './ProjectsTableHeader.scss';

type ProjectsTableHeaderProps = {
  columns: string[];
};

const ProjectsTableHeader = ({ columns = [] }: ProjectsTableHeaderProps) => (
  <thead className="ProjectsTableHeader">
    <tr>
      {columns.map((column) => (
        <td className={column} key={column}>
          {column}
        </td>
      ))}
    </tr>
  </thead>
);

export default ProjectsTableHeader;
