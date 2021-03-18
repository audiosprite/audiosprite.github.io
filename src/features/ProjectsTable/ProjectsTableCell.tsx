import * as React from 'react';
import './ProjectsTableCell.scss';

type ProjectsTableCellProps = {
  className?: string;
};

const ProjectsTableCell: React.FC<ProjectsTableCellProps> = ({
  children,
  className,
}) => (
  <td className={`${className}`.trim()}>
    <div className="ProjectsTableCell--Inner">{children}</div>
  </td>
);

export default ProjectsTableCell;
