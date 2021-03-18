import * as React from 'react';
import { Link } from '../../components';
import './Nav.scss';

const navOptions = [{ to: 'projects' }, { to: 'about' }, { to: 'contact' }];

const Nav = () => (
  <nav>
    {navOptions.map(({ to }, i) => (
      <React.Fragment key={to}>
        <Link hideUnderline to={to}>
          {to}
        </Link>
        {/* {i !== navOptions.length - 1 && <Spacer />} */}
      </React.Fragment>
    ))}
  </nav>
);

export default Nav;
