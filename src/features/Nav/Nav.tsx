import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../../components';
import './Nav.scss';

const navOptions = [
  { label: 'audio gallery', to: '/' },
  { label: 'credits', to: '/credits' },
  { label: 'press', to: '/press' },
  { label: 'about', to: '/about' },
  { label: 'contact', to: '/contact' },
];

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      {navOptions.map(({ label, to }, i) => (
        <Link
          className={`Nav--Link ${pathname === to ? 'activeRoute' : ''}`.trim()}
          hideUnderline
          key={to}
          to={to}
        >
          {label || to}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
