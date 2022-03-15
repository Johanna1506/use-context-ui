// @flow
import React from 'react';
import Spinner from '../../Spinner';

import style from '../styles/input.module.scss'

type Props = {
  className?: string,
  disabled?: boolean,
  isLoading?: boolean,
  error?: string,
  name: string,
  value: string,
  label: string,
  type?: string,
  onChange: (event: Event) => void,
};

const Button = (props: Props): React$Node => {
  const {
    label,
    error,
    name,
    className,
    disabled,
    isLoading,
    value,
    type,
    onChange,
  } = props;

  const actionOnChange = (event: Event) => {
    if (!disabled && onChange) onChange(event);
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onChange={actionOnChange}
        name={name}
        error={error ? true : false}
        className={className}
        disabled={disabled || isLoading}
        value={value}
      />
      {error && (
        <p>{error}</p>
      )}
      {isLoading && (<Spinner />)}
    </>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  isLoading: false,
	label: 'Envoyer',
  name: '',
  value: '',
  type: 'text',
};

export default Button;
