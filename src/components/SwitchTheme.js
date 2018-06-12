import React from 'react';
import THEMES from '../themes';

const SwitchTheme = ({clickHandler, theme}) => (
    <button className={`SwitchTheme SwitchTheme_${theme}`}
            onClick={clickHandler}>
        <i className="material-icons">{ theme === THEMES.dark ? 'brightness_1' : 'brightness_3' }</i>
    </button>
);

export default SwitchTheme;
