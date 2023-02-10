import React from 'react';
import {TAnswer} from 'src/answerBase'
import {THEME} from './../themes'

interface AnswerProp {
    answer: TAnswer
    theme: THEME

}

const Answer = ({answer, theme}: AnswerProp) => (
    <div style={{
        position: 'relative',
        maxWidth: 1000,
        maxHeight: 500,
        textAlign: 'right',
        borderRadius: 7,
        padding: '40px 60px 40px 60px',
        backgroundColor: theme === THEME.light ? 'white' : 'rgba(0, 0, 0, 0.8)',
        boxShadow: theme === THEME.light ? '0 0 20px 1px #eaeaea' : 'none'
    }}>
        <div style={{
            width: 140,
            height: 40,
            margin: '50 auto',
            position: 'relative',
            textAlign: 'center',
            backgroundImage: 'url(logo.png)',
            backgroundSize: 'contain',
            pointerEvents: 'none'
        }}/>
        <h1 dangerouslySetInnerHTML={{__html: answer.text}} style={{
            fontSize: 50,
            textAlign: 'center',
            color: theme === THEME.light ? 'black' : 'white'
        }}/>
        <div style={{
            fontSize: 20,
            color: 'darkgray',
            textAlign: 'right',
            marginRight: 50,
            display: 'inline-block'
        }}>{answer.name}</div>
    </div>
);

export {Answer}
