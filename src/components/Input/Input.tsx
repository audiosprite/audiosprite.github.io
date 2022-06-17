import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import './Input.scss';

type InputProps = {
  className?: string;
  label?: string | false;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  value?: string;
};
export const Input = ({
  className = '',
  label,
  name,
  onChange,
  type = 'input',
  value,
}: InputProps) => (
  <div className="Input--Root">
    {label !== false && <label htmlFor={name}>{label || name}</label>}
    <input
      className={`Input ${className}`.trim()}
      name={name}
      onChange={onChange}
      type={type}
      value={value ?? ''}
    />
  </div>
);
