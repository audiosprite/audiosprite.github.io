import * as React from 'react';
import './ProjectsTableHeader.scss';

type ProjectsTableHeaderProps = {
  columns: string[];
};

const ProjectsTableHeader = ({ columns = [] }: ProjectsTableHeaderProps) => (
  <thead className="ProjectsTableHeader">
    <tr>
      {columns.map((column, i) => (
        <td className={column} key={i}>
          {column}
        </td>
      ))}
    </tr>
  </thead>
);

export default ProjectsTableHeader;
