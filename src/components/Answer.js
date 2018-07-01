import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    Answer: {
        padding: {
            top: 40,
            right: 60,
            bottom: 40,
            left: 60,
        },
        position: 'relative',
        maxWidth: 1000,
        maxHeight: 500,
        textAlign: 'right',
        borderRadius: 7,
    },
    logo: {
        width: 277,
        height: 80,
        margin: [50, 'auto'],
        position: 'relative',
        textAlign: 'center',
        backgroundImage: 'url(logo.png)',
    },
    copyright: {
        fontSize: 20,
        color: 'darkgray',
        textAlign: 'right',
        marginRight: 50,
        display: 'inline-block',
    }
};

const Answer = ({classes, answer, theme}) => (
    <div className={`${classes.Answer} Answer_${theme}`}>
        <div className={classes.logo}/>
        <h2 dangerouslySetInnerHTML={{__html: answer.text}}/>
        <div className={classes.copyright}>{answer.name}</div>
    </div>
);

export default injectSheet(styles)(Answer);
