import * as React from 'react';
import { Link } from '../../components';
import { Store } from '../../components/Icons';
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
    {projects.map(
      ({ developer, name, publisher, releaseDate, stores, url }) => (
        <tr key={name}>
          <td className={columns[0]}>
            <Link href={url}>{name}</Link>
          </td>
          <td className={columns[1]}></td>
          <td className={columns[2]}>
            <div className="ProjectsTableBody--StoresCell">
              {stores
                ?.filter(({ url }) => url)
                .map(({ name, url }) => (
                  <Link href={url} key={name}>
                    <Store name={name} />
                  </Link>
                ))}
            </div>
          </td>
          <td className={columns[3]}>
            <Link href={developer.url}>{developer.name}</Link>
          </td>
          <td className={columns[4]}>
            {publisher && <Link href={publisher.url}>{publisher?.name}</Link>}
          </td>
          <td className={columns[5]}>{releaseDate?.getFullYear() || '-'}</td>
        </tr>
      ),
    )}
  </tbody>
);

export default ProjectsTableBody;
