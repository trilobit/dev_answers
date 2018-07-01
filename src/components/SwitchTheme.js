import React from 'react';
import THEMES from '../themes';
import injectSheet from 'react-jss';

const styles = {
    SwitchTheme: {
        width: 40,
        height: 40,
        border: 0,
        borderRadius: '50%',
        outline: 'none',
        cursor: 'pointer',
    }
};

const SwitchTheme = ({classes, clickHandler, theme}) => (
    <button className={`${classes.SwitchTheme} SwitchTheme_${theme}`}
            onClick={clickHandler}>
        <i className="material-icons">{theme === THEMES.dark ? 'brightness_1' : 'brightness_3'}</i>
    </button>
);

export default injectSheet(styles)(SwitchTheme);
