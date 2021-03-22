import * as React from 'react';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading: React.FC<HeadingProps> = ({ as: As = 'h1', children }) => (
  <As>{children}</As>
);

export default Heading;
