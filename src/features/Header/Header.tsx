import * as React from 'react';
import { Nav } from '..';
import { Link } from '../../components';
import './Header.scss';

const Header = () => (
  <header>
    <Link className="Name" to="/">
      John Fio
    </Link>
    <Nav />
  </header>
);

export default Header;
