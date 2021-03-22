import * as React from 'react';
import { Nav } from '..';
import { Heading, Link, Spacer } from '../../components';
import './Header.scss';

const Header = () => (
  <header>
    <Link className="Name" hideUnderline to="/">
      <Heading>John Fio</Heading>
    </Link>
    <Spacer />
    <Nav />
  </header>
);

export default Header;
