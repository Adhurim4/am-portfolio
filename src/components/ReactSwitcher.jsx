import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import ReactSwitch from 'react-switch';

const ReactSwitcher = ({ theme, toggleTheme }) => {
  return (
    <div className="hidden xl:flex fixed top-[29%] left-0">
      <div className="relative">
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === 'dark'}
          checkedIcon={<FaMoon className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />} // Centered icon for checked (night)
          uncheckedIcon={<FaSun className="text-yellow-500 mx-auto my-[18%]" />} // Centered icon for unchecked (day)
          className="react-switcher"
        />
      </div>
    </div>
  );
};

export default ReactSwitcher;
