import React, {useState} from 'react';
import {ANSWERS} from '../answerBase';
import {THEME} from '../themes';
import {Overlay} from './Overlay';
import {Answer} from './Answer';
import {SwitchTheme} from './SwitchTheme';

const THEME_KEY = 'theme';

const getIndex = (isRandom = true): number => {
    let index;

    if (!window.location.hash || isRandom) {
        index = parseInt(String(Math.random() * ANSWERS.length), 10);
    } else {
        index = parseInt(window.location.hash.substr(1), 10);
    }

    return index;
}

const defaultTheme: THEME = (window.localStorage.getItem(THEME_KEY) || THEME.light) as THEME;

const App = () => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);
    const [index, setIndex] = useState(getIndex(false));

    const handleOverlayClick = () => {
        setIndex(getIndex());
    };

    const handleSwitchThemeClick = () => {
        const currentTheme = theme === THEME.light ? THEME.dark : THEME.light;

        window.localStorage.setItem(THEME_KEY, currentTheme);
        setTheme(currentTheme);
    };

    return (
        <div style={{
            transition: 'background .2s linear',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            margin: 0,
            backgroundColor: theme === THEME.light ? 'white' : '#444'
        }}>
            <Overlay onClick={handleOverlayClick}/>
            <Answer
                theme={theme}
                answer={ANSWERS[index]}/>

            <SwitchTheme theme={theme}
                         onClick={handleSwitchThemeClick}/>
        </div>
    );
}

export {App}
