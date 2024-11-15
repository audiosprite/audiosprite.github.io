import * as React from 'react';
import { Spacer, Third } from '../../components';
import { email } from '../../data';
import { Social } from '../../features';
import './Contact.scss';

const Contact: React.FC<Record<string, unknown>> = () => {
  const [emailHasBeenClicked, setEmailHasBeenClicked] = React.useState(false);
  const handleClickEmail = () => {
    if (!emailHasBeenClicked) {
      setEmailHasBeenClicked(true);
    }
  };
  return (
    <div className="Contact">
      <Third>
        <div className="Contact--Content">
          {/* eslint-disable-next-line */}
          <div className="Contact--EmailText" onClick={handleClickEmail}>
            {email}
          </div>
          <Spacer spacing={20} />
          <Social />
        </div>
      </Third>
    </div>
  );
};

export default Contact;
