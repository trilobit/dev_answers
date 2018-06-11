import React from 'react';

const SwitchTheme = ({clickHandler, theme}) => (
    <button className={`SwitchTheme SwitchTheme_${theme}`}
            onClick={clickHandler}>
    </button>
);

export default SwitchTheme;
