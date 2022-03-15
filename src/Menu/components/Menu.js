import React, { useState } from 'react';
import { HOME } from '../../Core/constants';
import Button from '../../Shared/Button';
import routes from '../../Core/Config/routes';

type Props = {

}

const Menu = (props: Props): React$Node => {
  const [isExpanded, setIsExpanded] = useState();

  const toggleMenu = (e: Event): void => {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav aria-expanded={isExpanded}>
      <header>
        <a href={HOME}>
          logo
        </a>
        <Button
          icon={isExpanded ? 'iconControlsArrowLeft' : 'iconControlsArrowRight'}
          onClick={toggleMenu}
        />
      </header>
      <main>
        {routes.map(route => (
          route.inMenu && <a href={route.path}>Test</a>
        ))}
      </main>
    </nav>
  )
};

export default Menu;