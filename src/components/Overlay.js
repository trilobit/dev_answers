import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    overlay: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }
    }
};

const Overlay = ({classes, clickHandler}) => (
    <div className={classes.overlay}
         onClick={clickHandler}
    />
);

export default injectSheet(styles)(Overlay);
