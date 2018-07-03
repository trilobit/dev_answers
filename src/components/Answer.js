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
    },
    '& h2': {
        fontSize: 50,
        textAlign: 'center',
    },
    light: {
        boxShadow: '0 0 20px 1px #eaeaea',
        backgroundColor: 'white',
    },
    dark: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        '& h2': {
            color: 'white',
        }
    }
};

const Answer = ({classes, answer, light, dark}) => (
    <div className={`${classes.Answer} ${light && classes.light} ${dark && classes.dark}`}>
        <div className={classes.logo}/>
        <h2 dangerouslySetInnerHTML={{__html: answer.text}}/>
        <div className={classes.copyright}>{answer.name}</div>
    </div>
);

export default injectSheet(styles)(Answer);
