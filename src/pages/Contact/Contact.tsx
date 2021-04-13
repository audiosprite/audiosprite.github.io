import * as React from 'react';
import { Amplitude } from '../../amplitude/amplitude';
import { Spacer, Third } from '../../components';
import { email } from '../../data';
import { Social } from '../../features';
import './Contact.scss';

const Contact: React.FC<Record<string, unknown>> = () => {
  const handleClickEmail = () => {
    Amplitude.logEvent('emailClicked');
  };
  return (
    <div className="Contact">
      <Third>
        <div className="Contact--Content">
          {/* eslint-disable-next-line */}
          <div onClick={handleClickEmail}>{email}</div>
          <Spacer spacing={20} />
          <Social />
        </div>
      </Third>
    </div>
  );
};

export default Contact;
