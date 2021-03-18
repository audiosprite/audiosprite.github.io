import * as React from 'react';
import { email } from '../../data';
import './Contact.scss';

const Contact = () => {
  return <div className="Contact">{email}</div>;
};

export default Contact;
