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

const ProjectsTableBody = ({
  columns,
  projects = [],
}: ProjectsTableBodyProps) => (
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
              className="ProjectsTableBody--Media"
              size={16}
              src={`media/${type}.svg`}
            />
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[1]}>
            <Link href={url}>{name}</Link>
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[2]}>
            {musicStores
              ?.filter(({ name, url }) => url && name === 'Bandcamp')
              .map(({ name, url }) => (
                <Link key={name} href={url}>
                  <Store name={name} />
                </Link>
              ))}
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
            <Link href={developer.url}>{developer.name}</Link>
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[5]}>
            {publisher && <Link href={publisher.url}>{publisher?.name}</Link>}
          </ProjectsTableCell>
          <ProjectsTableCell className={columns[6]}>
            {releaseDate?.getFullYear() || '-'}
          </ProjectsTableCell>
        </tr>
      ),
    )}
  </tbody>
);

export default ProjectsTableBody;
