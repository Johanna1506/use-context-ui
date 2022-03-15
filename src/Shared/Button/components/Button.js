// @flow
import React from 'react';
import Icon from '../../Icon';
import Spinner from '../../Spinner';

import '../styles/button.scss';

type Props = {
  className?: string,
  disabled?: boolean,
  isLoading: boolean,
  label?: string,
  icon?: string,
  onClick: (event: Event) => void,
};

const Button = (props: Props): React$Node => {
  const {
    label,
    className,
    disabled,
    isLoading,
    icon,
    onClick,
  } = props;

  const actionOnClick = (event: Event) => {
    if (!disabled && onClick) onClick(event);
  };

  return (
    <button
			className={className}
			onClick={actionOnClick}
			disabled={disabled}
		>
			{isLoading ? (
				<Spinner />
			) : label && (
        label
      )}
      {icon && (
        <Icon name={icon} />
      )}
		</button>
  );
};

Button.defaultProps = {
  className: null,
  disabled: false,
  isLoading: false,
};

export default Button;
