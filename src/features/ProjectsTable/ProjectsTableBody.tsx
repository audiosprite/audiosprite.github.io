import * as React from 'react';
import { Link } from '../../components';
import { Project } from '../../types';
import './ProjectsTableBody.scss';

type ProjectsTableBodyProps = {
  columns: string[];
  projects: Project[];
};

const ProjectsTableBody = ({
  columns,
  projects = [],
}: ProjectsTableBodyProps) => (
  <tbody className="ProjectsTableBody">
    {projects.map(({ name, publisher, releaseDate }) => (
      <tr key={name}>
        <td className={columns[0]}>{name}</td>
        <td className={columns[1]}>{name}</td>
        <td className={columns[2]}>
          {publisher && <Link href={publisher.url}>{publisher?.name}</Link>}
        </td>
        <td className={columns[3]}>{name}</td>
        <td className={columns[4]}>{releaseDate?.getFullYear()}</td>
      </tr>
    ))}
  </tbody>
);

export default ProjectsTableBody;
