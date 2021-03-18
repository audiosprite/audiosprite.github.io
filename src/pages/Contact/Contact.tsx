import * as React from 'react';
import { Spacer, Third } from '../../components';
import { email } from '../../data';
import { Social } from '../../features';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="Contact">
      <Third>
        <div className="Contact--Content">
          <div>{email}</div>
          <Spacer spacing={20} />
          <Social />
        </div>
      </Third>
    </div>
  );
};

export default Contact;
