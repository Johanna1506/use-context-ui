// @flow
import React from 'react';

import style from '../styles/spinner.module.scss';

type Props = {
  className: string,
};

export const Spinner = (props: Props): React$Node => {
  const { className } = props;


  return (
    <div className={className + style.spinner}>
      <span className={style.icon} />
    </div>
  );
};

Spinner.defaultProps = {
  className: '',
};

export default Spinner;
