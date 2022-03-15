// @flow
import React from 'react';

import svg from '../sprite';

type Props = {
  name: string,
}

const Icon = (props: Props): React$Node => {
  const { name } = props;

  return svg[name];
};

Icon.defaultProps = {
  name: 'iconControlsArrowLeft'
};

export default Icon;