import * as React from 'react';
import { Third } from '../../components';
import { email } from '../../data';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="Contact">
      <Third>{email}</Third>
    </div>
  );
};

export default Contact;
