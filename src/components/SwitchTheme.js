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
    },
    light: {
        backgroundColor: '#444',
        color: 'white',
    },
    dark: {
        backgroundColor: 'white',
        color: 'black',
    }
};

const SwitchTheme = ({classes, clickHandler, light, dark}) => (
    <button className={`${classes.SwitchTheme} ${light && classes.light} ${dark && classes.dark}`}
            onClick={clickHandler}>
        <i className="material-icons">{dark === THEMES.dark ? 'brightness_1' : 'brightness_3'}</i>
    </button>
);

export default injectSheet(styles)(SwitchTheme);
