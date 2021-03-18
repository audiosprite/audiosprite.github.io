import * as React from 'react';
import './Third.scss';

const Third: React.FC = ({ children }) => {
  return (
    <div className="Third">
      <div className="Third--Upper" />
      {children}
      <div className="Third--Lower" />
    </div>
  );
};

export default Third;
