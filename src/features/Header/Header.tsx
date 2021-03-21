import * as React from 'react';
import { Nav } from '..';
import { Link, Spacer } from '../../components';
import './Header.scss';

const Header = () => (
  <header>
    <Link className="Name" hideUnderline to="/">
      John Fio
    </Link>
    <Spacer />
    <Nav />
  </header>
);

export default Header;
