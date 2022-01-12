import * as React from 'react';
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../../components';
import './Nav.scss';

const navOptions = [
  // { label: 'audio gallery', to: '/' },
  { label: 'credits', to: '/credits' },
  { label: 'press', to: '/press' },
  { label: 'about', to: '/about' },
  { label: 'contact', to: '/contact' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const closeNav = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const toggleOpen = useCallback(() => {
    setOpen((b) => !b);
  }, [setOpen]);

  return (
    <>
      <button
        aria-label="Hamburger"
        className="Nav--Hamburger"
        onClick={toggleOpen}
      >
        <div />
        <div />
        <div />
      </button>
      <nav className={open ? 'isOpen' : 'isClosed'}>
        {navOptions.map(({ label, to }) => (
          <Link
            className={`Nav--Link ${
              pathname === to ? 'activeRoute' : ''
            }`.trim()}
            hideUnderline
            key={to}
            onClick={closeNav}
            to={to}
          >
            {label || to}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Nav;
