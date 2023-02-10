import React from 'react';
import {THEME} from '../themes';

interface SwitchThemeProps {
    onClick: () => void;
    theme: THEME
}

const SwitchTheme = ({onClick, theme}: SwitchThemeProps) => (
    <button onClick={onClick} style={{
        width: 40,
        height: 40,
        border: 0,
        borderRadius: '50%',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: theme === THEME.light ? '#444' : 'white',
        color: theme === THEME.light ? 'white' : 'black',
        right: 10,
        bottom: 10,
        position: 'fixed',
        zIndex: 1000
    }}>
        {/*<i className="material-icons">{dark === THEME.dark ? 'brightness_1' : 'brightness_3'}</i>*/}
        <i className="material-icons"></i>
    </button>
);

export {SwitchTheme}
