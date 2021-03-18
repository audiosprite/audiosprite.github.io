import * as React from 'react';
import './Button.scss';

type ButtonProps = {
  className?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`Button ${className}`.trim()}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
