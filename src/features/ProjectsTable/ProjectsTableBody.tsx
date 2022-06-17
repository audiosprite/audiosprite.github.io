import * as React from 'react';
import { Link } from '../../components';
import { Img, Store } from '../../components/Icons';
import { Project } from '../../types';
import ProjectsTableCell from './ProjectsTableCell';
import './ProjectsTableBody.scss';

type ProjectsTableBodyProps = {
  columns: string[];
  projects: Project[];
};

const ProjectsTableBody: React.FC<ProjectsTableBodyProps> = ({
  columns,
  projects = [],
}) => (
  <tbody className="ProjectsTableBody">
    {projects.map(
      ({
        developer,
        musicStores,
        name,
        publisher,
        releaseDate,
        stores,
        type,
        url,
      }) => (
        <tr key={name}>
          <ProjectsTableCell className={columns[0]}>
            <Img
              alt={type}
              className="ProjectsTableBody--Media"
              size={16}
              src={`media/${type === 'LetsPlay' ? 'podcast' : type}.svg`}
            />
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[1]}>
            <Link href={url}>{name}</Link>
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[2]}>
            <div className="ProjectsTableBody--StoresCell">
              {musicStores
                ?.filter(({ name, url }) => url && name === 'Bandcamp')
                .map(({ name, url }) => (
                  <Link key={name} href={url}>
                    <Store name={name} />
                  </Link>
                ))}
            </div>
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[3]}>
            <div className="ProjectsTableBody--StoresCell">
              {stores
                ?.filter(({ url }) => url)
                .map(({ name, url }) => (
                  <Link href={url} key={name}>
                    <Store name={name} />
                  </Link>
                ))}
            </div>
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[4]}>
            <div className="ProjectsTableBody--WithCell">
              <Link href={developer.url}>{developer.name}</Link>
              {publisher && (
                <>
                  <span>{' / '}</span>
                  <Link href={publisher.url}>{publisher?.name}</Link>
                </>
              )}
            </div>
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[5]}>
            {releaseDate?.getFullYear() || '-'}
          </ProjectsTableCell>
        </tr>
      ),
    )}
  </tbody>
);

export default ProjectsTableBody;
