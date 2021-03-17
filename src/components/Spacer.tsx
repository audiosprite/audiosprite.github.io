import * as React from 'react';

type SpacerProps = {
  spacing?: number;
};

const Spacer = ({ spacing = 8 }: SpacerProps) => (
  <div className="Spacer" style={{ flex: `0 0 ${spacing}px` }} />
);

export default Spacer;
