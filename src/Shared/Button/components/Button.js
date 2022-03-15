// @flow
import React from 'react';
import Spinner from '../../Spinner';

import style from '../styles/button.module.scss'

type Props = {
  children: React$Node,
  className: string,
  disabled?: boolean,
  isLoading: boolean,
  label: string,
  onClick: (event: Event) => void,
};

const Button = (props: Props): React$Node => {
  const {
    label,
    className,
    disabled,
    isLoading,
    onClick,
  } = props;

  const actionOnClick = (event: Event) => {
    if (!disabled && onClick) onClick(event);
  };

  return (
    <button
			className={className + style.button}
			onClick={actionOnClick}
			disabled={disabled}
		>
			{label}
			{isLoading && (
				<Spinner />
			)}
		</button>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  isLoading: false,
	label: 'Envoyer'
};

export default Button;
